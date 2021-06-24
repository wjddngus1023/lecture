import "typings-test";
import smartparam = require("../dist/index");
import "should";
//construct test objects

let parentObject:any = {};
let childObject:any = {};

describe("smartparam",function(){
    describe(".exists()",function(){
        it("childObject should not yet be in parentObject",function(){
            (smartparam.exists(parentObject,"childObject")).should.be.false();
            parentObject.childObject = childObject;
        });
        it("childObject should now BE in parentObject",function(){
            (smartparam.exists(parentObject,"childObject")).should.be.true();
        });
    });
    describe(".forEachMinimatch",function(){
        it("should call properties for minimatched properties",function(){
            let testObject = {
                matchedOne: "Hey!",
                matchedTwo: "this works!",
                notmatched: "NOT!"
            }
            smartparam.forEachMinimatch(testObject,"matched*",(matchedProperty)=>{
                console.log(matchedProperty);
            });
        })
    })
});