const request = require('request')
const { v4: uuidv4 } = require('uuid'); //npm install uuidv4 --save
const sign = require('jsonwebtoken').sign
const crypto = require('crypto')
const queryEncode = require("querystring").encode

const access_key = "testwjddngus1023"
const secret_key = "TEST_SECRET_KET"
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
volume = {}

async function main() { // 트레이딩 메인(반복문사용)

   
    moment = 1.0;

    ret = await get('http://kali.securekim.com:3082/signals');
    
    retJSON = JSON.parse(ret);

    MyKRWBalance = await getBalance();
    MyKRWBalance = JSON.parse(MyKRWBalance)[0].balance
    console.log("your current KRW Balance is : " + MyKRWBalance) 
    
    
     while(MyKRWBalance > 100000){ //현금잔고 100000원이상인 동안
        for (var i in retJSON) {
            market = i;
            rsiSignal = retJSON[i].rsiSignal
            if (rsiSignal == "LONG" || rsiSignal == "BIGLONG") {
                if(MyKRWBalance > 1000000){ // 돈이 1000000이상 있을때만
                    console.log("롱이다 드가자 : " + market);
                    body = await API_buyImmediate(market, 1000000);
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
    // balance = await getBalance()
    // console.log(balance)
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
    */
    /*
     body = await API_buyImmediate("KRW-BTC", 1000000);       // 수수료 에러
     console.log(body) //체크완료
     body = await getBalance()
     console.log(body)
     body = await API_buyImmediate("KRW-BTC", 500000);
     console.log(body)
     body = await API_sellImmediate("KRW-BTC", 1.0);
     console.log(body)
     body = await API_buyImmediate("KRW-BTC", -1);       // 범위 에러
     console.log(body)
     body = await API_buyImmediate("KRW-BTC", 1);        // 최소 에러
     console.log(body)
     body = await API_buyImmediate("KRW-BTC", 1234);     // 단위 에러
     console.log(body)
     body = await API_buyImmediate("KRW-BTC", "");       // 가격 에러
     console.log(body)
     body = await API_buyImmediate("KRW-BTC", 100000000);  // 가격 에러
     console.log(body)
     body = await API_buyImmediate("KRW-ABC", 10000);    // 마켓 에러
     console.log(body)
     body = await API_buyImmediate("", 10000);           // 마켓 에러
     console.log(body)
     body = await API_buyImmediate("KRW-ABC-BTC", 10000);// 마켓 에러
     console.log(body)
     body = await API_sellImmediate("KRW-BTC", 100);      // 개수 에러
     console.log(body)
 
 ////////////////////TESTED////////////////
     */
    //// ERROR TEST - BUY ////
    // body = await getBalance()
    // body = await API_buyImmediate("KRW-BTC", 1000000);  // 수수료 에러
    // body = await API_buyImmediate("KRW-BTC", 500000);   // 정상 구매
    // body = await API_sellImmediate("KRW-BTC", 1.0);     // 정상 판매
    // body = await API_buyImmediate("KRW-BTC", -1);       // 범위 에러
    // body = await API_buyImmediate("KRW-BTC", 1);        // 최소 에러
    // body = await API_buyImmediate("KRW-BTC", 1234);     // 단위 에러
    // body = await API_buyImmediate("KRW-BTC", "");       // 가격 에러
    // body = await API_buyImmediate("KRW-BTC", 100000000);  // 가격 에러
    // body = await API_buyImmediate("KRW-ABC", 10000);    // 마켓 에러
    // body = await API_buyImmediate("", 10000);           // 마켓 에러
    // body = await API_buyImmediate("KRW-ABC-BTC", 10000);// 마켓 에러
    // body = await API_sellImmediate("KRW-BTC", 100);      // 개수 에러
    /*
    // ERROR TEST - SELL ////
    */
