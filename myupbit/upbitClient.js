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
    console.log("전량 매각 완료")
}
async function LastGamble(){ // 망하면 100만원남기고 BTC풀매수하고 기도
    console.log("Last Gamble : " + market);
    body = await API_buyImmediate(market[0], MyKRWBalance - 1000000);
    volume[market] = body.volume
}
async function Super_Danta(){ // 매수힘 매도힘만보고 무지성 구매
    console.log("개미들아 힘을 내 ! : " + market);
    body = await API_buyImmediate(market, 1000000);
    volume[market] = body.volume
    // setTimeout(API_sellImmediate(market, volume[market]/2),10000); // 10초뒤 구매량의 절반 매도
}

volume = {}

async function main() { // 트레이딩 메인(반복문사용)

   
    moment = 1.0;

    ret = await get('http://kali.securekim.com:3082/signals');
    retJSON = JSON.parse(ret);

    MyWallet = await getBalance();
    WalletJSON = JSON.parse(MyWallet)
    MyKRWBalance = WalletJSON[0].balance
    console.log("your current KRW Balance is : " + MyKRWBalance) 

    //body = await API_buyImmediate("KRW-MVL", 10000000); 

    TotalCoinValue = 0;
    CoinValue = 0;
    // console.log(MyWallet)
    for(var i = 1 in WalletJSON){ // 현재 코인가치 출력
            MyCoin = WalletJSON[i].balance
            MyValue = WalletJSON[i].avg_buy_price
            //MyVal = retJSON["KRW-" + WalletJSON[i].currency].ask_price
            CoinValue = MyCoin * MyValue
            console.log(WalletJSON[i].currency + " : " + CoinValue + "\n")
            TotalCoinValue += CoinValue  
    }

    // for(i in retJSON){ // testing 
    //     console.log(retJSON[i].ask_price)
    // }

    //  while(MyKRWBalance > 0){ //돈없을때까지 무한동력
        for (var i in retJSON) {
            market = i;
            rsiSignal = retJSON[i].rsiSignal
            bidpower = retJSON[i].bid_power // 매수파워
            askpower = retJSON[i].ask_power // 매도파워
            if (MyKRWBalance > 25000000) {  // 현금 2500만원까지 유지
                if(rsiSignal == "LONG" || rsiSignal == "BIGLONG"){ // 롱,빅롱포지션일때만 구매
                    console.log("자 드가자 : " + market);
                    body = await API_buyImmediate(market, 1000000);
                    volume[market] = body.volume
                    MyKRWBalance -= 1000000
                    console.log("your current KRW Balance is : " + MyKRWBalance) 
                } else if(bidpower > askpower){ // 매수힘이 더높으면 무지성으로 구매
                    Super_Danta();
                    MyKRWBalance -= 1000000
                    console.log("your current KRW Balance is : " + MyKRWBalance) 
                }
            } else if (rsiSignal == "SHORT" || rsiSignal == "BIGSHORT") { // 숏,빅숏 포지션에서 매도
                balance = await getBalance()
                let volume;
                for (var i in balance) {
                    if ("KRW-" + balance[i].currency == market) {
                        volume = balance[i].balance;
                        if(volume > 0){
                            console.log("돔황차~ : " + market)
                            await API_sellImmediate(market, volume[market]);
                        }
                    }
                }
            } else if(bidpower<askpower){ // 매도힘이 더세면 매도
                balance = await getBalance()
                let volume;
                for (var i in balance) {
                    if ("KRW-" + balance[i].currency == market) {
                        volume = balance[i].balance;
                        if(volume > 0){
                            console.log("하락장이다 돔황차~ : " + market)
                            await API_sellImmediate(market, volume[market]);
                        }
                    }
                }
            }
                // else if(TotalCoinValue + MyKRWBalance < 40000000){ // 현금 + 보유코인가치 4000만 이하면 다팔고 새시작
                // await Armageddon();
                // await LastGamble();
                // }
            }
        }

    
//}

main()