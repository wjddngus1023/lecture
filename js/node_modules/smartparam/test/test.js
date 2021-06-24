"use strict";
require("typings-test");
var smartparam = require("../dist/index");
require("should");
//construct test objects
var parentObject = {};
var childObject = {};
describe("smartparam", function () {
    describe(".exists()", function () {
        it("childObject should not yet be in parentObject", function () {
            (smartparam.exists(parentObject, "childObject")).should.be.false();
            parentObject.childObject = childObject;
        });
        it("childObject should now BE in parentObject", function () {
            (smartparam.exists(parentObject, "childObject")).should.be.true();
        });
    });
    describe(".forEachMinimatch", function () {
        it("should call properties for minimatched properties", function () {
            var testObject = {
                matchedOne: "Hey!",
                matchedTwo: "this works!",
                notmatched: "NOT!"
            };
            smartparam.forEachMinimatch(testObject, "matched*", function (matchedProperty) {
                console.log(matchedProperty);
            });
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFDdEIsSUFBTyxVQUFVLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFDN0MsUUFBTyxRQUFRLENBQUMsQ0FBQTtBQUNoQix3QkFBd0I7QUFFeEIsSUFBSSxZQUFZLEdBQU8sRUFBRSxDQUFDO0FBQzFCLElBQUksV0FBVyxHQUFPLEVBQUUsQ0FBQztBQUV6QixRQUFRLENBQUMsWUFBWSxFQUFDO0lBQ2xCLFFBQVEsQ0FBQyxXQUFXLEVBQUM7UUFDakIsRUFBRSxDQUFDLCtDQUErQyxFQUFDO1lBQy9DLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xFLFlBQVksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLDJDQUEyQyxFQUFDO1lBQzNDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsbUJBQW1CLEVBQUM7UUFDekIsRUFBRSxDQUFDLG1EQUFtRCxFQUFDO1lBQ25ELElBQUksVUFBVSxHQUFHO2dCQUNiLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixVQUFVLEVBQUUsYUFBYTtnQkFDekIsVUFBVSxFQUFFLE1BQU07YUFDckIsQ0FBQTtZQUNELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFVBQUMsZUFBZTtnQkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy10ZXN0XCI7XG5pbXBvcnQgc21hcnRwYXJhbSA9IHJlcXVpcmUoXCIuLi9kaXN0L2luZGV4XCIpO1xuaW1wb3J0IFwic2hvdWxkXCI7XG4vL2NvbnN0cnVjdCB0ZXN0IG9iamVjdHNcblxubGV0IHBhcmVudE9iamVjdDphbnkgPSB7fTtcbmxldCBjaGlsZE9iamVjdDphbnkgPSB7fTtcblxuZGVzY3JpYmUoXCJzbWFydHBhcmFtXCIsZnVuY3Rpb24oKXtcbiAgICBkZXNjcmliZShcIi5leGlzdHMoKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwiY2hpbGRPYmplY3Qgc2hvdWxkIG5vdCB5ZXQgYmUgaW4gcGFyZW50T2JqZWN0XCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIChzbWFydHBhcmFtLmV4aXN0cyhwYXJlbnRPYmplY3QsXCJjaGlsZE9iamVjdFwiKSkuc2hvdWxkLmJlLmZhbHNlKCk7XG4gICAgICAgICAgICBwYXJlbnRPYmplY3QuY2hpbGRPYmplY3QgPSBjaGlsZE9iamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwiY2hpbGRPYmplY3Qgc2hvdWxkIG5vdyBCRSBpbiBwYXJlbnRPYmplY3RcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgKHNtYXJ0cGFyYW0uZXhpc3RzKHBhcmVudE9iamVjdCxcImNoaWxkT2JqZWN0XCIpKS5zaG91bGQuYmUudHJ1ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5mb3JFYWNoTWluaW1hdGNoXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgY2FsbCBwcm9wZXJ0aWVzIGZvciBtaW5pbWF0Y2hlZCBwcm9wZXJ0aWVzXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCB0ZXN0T2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRPbmU6IFwiSGV5IVwiLFxuICAgICAgICAgICAgICAgIG1hdGNoZWRUd286IFwidGhpcyB3b3JrcyFcIixcbiAgICAgICAgICAgICAgICBub3RtYXRjaGVkOiBcIk5PVCFcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc21hcnRwYXJhbS5mb3JFYWNoTWluaW1hdGNoKHRlc3RPYmplY3QsXCJtYXRjaGVkKlwiLChtYXRjaGVkUHJvcGVydHkpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWF0Y2hlZFByb3BlcnR5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0pXG59KTsiXX0=
