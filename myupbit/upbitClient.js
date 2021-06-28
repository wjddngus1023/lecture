const request = require('request')
const { v4: uuidv4 } = require('uuid'); //npm install uuidv4 --save
const sign = require('jsonwebtoken').sign
const crypto = require('crypto')
const queryEncode = require("querystring").encode

const access_key = "wjddngus1023"
const secret_key = "t/oUeiRNgR/odrFtowbJ0tuz720zw5pOS+Yfo1Y4igo="
const server_url = "http://ubuntu.securekim.com"

async function get(url){
    return new Promise(function(resolve, reject) {
        request(url, function (err, res, resbody) {
            if(err){ reject(err) } else {
                console.log('GET :', res.statusCode); 
                resolve(resbody) 
            }});
})}

async function getBalance() {
    const payload = {
        access_key: access_key,
        nonce: uuidv4(),
    }
    const token = sign(payload, secret_key)
    const options = {
        method: "GET",
        url: server_url + "/v1/accounts",
        headers: { Authorization: `Bearer ${token}` },
    }
    return new Promise(function (resolve, reject) {
        request(options, (error, response, body) => {
            if (error) reject();
            console.log(response.statusCode)
            resolve(body)
        })
    });
}

//얼마너치살건지
async function API_buyImmediate(market, price){ 
    const body = {
        market: market,
        side: 'bid',
        volume: null,
        price: price.toString(),
        ord_type: 'price',
    }
    const query = queryEncode(body)
    const hash = crypto.createHash('sha512')
    const queryHash = hash.update(query, 'utf-8').digest('hex')
    const payload = {
        access_key: access_key,
        nonce: uuidv4(),
        query_hash: queryHash,
        query_hash_alg: 'SHA512',
    }
    const token = sign(payload, secret_key)
    const options = {
        method: "POST",
        url: server_url + "/v1/orders",
        headers: {Authorization: `Bearer ${token}`},
        json: body
    }
    return new Promise(function(resolve, reject) {
        request(options, (error, response, body) => {
            if (error) reject();
            console.log(response.statusCode) 
            resolve(body)
        })
    });
}

//몇개팔건지
async function API_sellImmediate(market, volume){
    const body = {
        market: market,
        side: 'ask',
        volume: volume.toString(),
        price: null,
        ord_type: 'market',
    }
    const query = queryEncode(body)
    const hash = crypto.createHash('sha512')
    const queryHash = hash.update(query, 'utf-8').digest('hex')
    const payload = {
        access_key: access_key,
        nonce: uuidv4(),
        query_hash: queryHash,
        query_hash_alg: 'SHA512',
    }
    const token = sign(payload, secret_key)
    const options = {
        method: "POST",
        url: server_url + "/v1/orders",
        headers: {Authorization: `Bearer ${token}`},
        json: body
    }
    return new Promise(function(resolve, reject) {
        request(options, (error, response, body) => {
            if (error) reject();
            console.log(response.statusCode) 
            resolve(body)
        })
    });
}

async function sellAll() {// 전량매각
    _balance = await getBalance();
    _balance = JSON.parse(_balance);
    for (let i in _balance) {
      market = "KRW-" + _balance[i].currency;
      balance = _balance[i].balance;
      if (market != "KRW-KRW" && balance > 0) {
        API_sellImmediate(market, balance);
      }
    }
  }

async function Armageddon(){ // 아마겟돈(전량 매각하고 새출발)
    sellAll()
}
async function LastGamble(){ // 망하면 10만원남기고 BTC풀매수하고 기도
    console.log("Last Gamble : " + market);
    body = await API_buyImmediate(market[0], MyKRWBalance - 100000);
    volume[market] = body.volume
}


volume = {}

async function main() { // 트레이딩 메인(반복문사용)

   
    moment = 1.0;

    ret = await get('http://kali.securekim.com:3082/signals');
    
    retJSON = JSON.parse(ret);

    MyKRWBalance = await getBalance();
    MyKRWBalance = JSON.parse(MyKRWBalance)[0].balance
    console.log("your current KRW Balance is : " + MyKRWBalance) 

    
    
    
     while(MyKRWBalance > 0){ //돈없을때까지 무한동력
        for (var i in retJSON) {
            market = i;
            rsiSignal = retJSON[i].rsiSignal
            if (rsiSignal == "LONG" || rsiSignal == "BIGLONG") {
                if(MyKRWBalance > 5000000){ // 현금 500만원까지 유지
                    console.log("자 드가자 : " + market);
                    body = await API_buyImmediate(market, 100000);
                    volume[market] = body.volume
                }
            } else if (rsiSignal == "SHORT" || rsiSignal == "BIGSHORT") {
                balance = await getBalance()
                let volume;
                for (var i in balance) {
                    if ("KRW-" + balance[i].currency == market) {
                        volume = balance[i].balance;
                    }
                }
                console.log("돔황차~ : " + market)
                await API_sellImmediate(market, volume[market]);
            }
        }
    }
    MyCoinValue = await getBalance();
    for(i = 1; i < getBalance.length ; i++){ // 현재 코인가치 출력
        MyCoin = JSON.parse(MyCoinValue)[i].balance
        MyValue = JSON.parse(MyCoinValue)[i].avg_buy_price
        CoinValue = MyCoin * MyValue
        console.log(CoinValue + "\n")
        TotalCoinValue += CoinValue
    }
    if(TotalCoinValue + MyKRWBalance < 8000000){ // 현금 + 보유코인가치 800만 이하면 다팔고 새시작
        await Armageddon();
        await LastGamble();
    }
}

main()




    // var access_key = "QNNtkaroxY3ASQrhxXXaAxuqJxFYtko61Y1xBPlW"
    // var secret_key = "NW7dHskx9JQsHx4dOQM7i2RGuhG3qdmWBPkLnpxY"
    // var server_url = "https://api.upbit.com"
    // body = await getBalance(access_key, secret_key, server_url)
    // console.log(body)
    /*
    [
        {"currency":"KRW","balance":"몇개","locked":"11005499.93629343","avg_buy_price":"0","avg_buy_price_modified":true,"unit_currency":"KRW"},
    ]
    [
        {"currency":"KRW","balance":"15232854.60024727","locked":"11005499.93629343","avg_buy_price":"0","avg_buy_price_modified":true,"unit_currency":"KRW"},
        {"currency":"BTC","balance":"0.10344202","locked":"0.0","avg_buy_price":"48336245.83","avg_buy_price_modified":false,"unit_currency":"KRW"},
        {"currency":"SNT","balance":"0.0","locked":"8227.02651414","avg_buy_price":"121.55","avg_buy_price_modified":false,"unit_currency":"KRW"},
        {"currency":"ETH","balance":"1.3548063","locked":"0.0","avg_buy_price":"2952451.56","avg_buy_price_modified":false,"unit_currency":"KRW"},
        {"currency":"ATOM","balance":"178.10340886","locked":"0.0","avg_buy_price":"16844.15","avg_buy_price_modified":false,"unit_currency":"KRW"},
        {"currency":"BTT","balance":"0.0","locked":"914999.36839014","avg_buy_price":"5.56","avg_buy_price_modified":false,"unit_currency":"KRW"},
        {"currency":"GAS","balance":"0.07329744","locked":"0.0","avg_buy_price":"14408.68","avg_buy_price_modified":false,"unit_currency":"KRW"},
        {"currency":"WIN","balance":"730.56498603","locked":"0.0","avg_buy_price":"0","avg_buy_price_modified":false,"unit_currency":"KRW"},
        {"currency":"META","balance":"0.0","locked":"25021.75517441","avg_buy_price":"116.29","avg_buy_price_modified":false,"unit_currency":"KRW"}
    ]
   
