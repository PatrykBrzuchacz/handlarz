(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/service/playing-field.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/service/playing-field.service.ts ***!
  \*********************************************************/
/*! exports provided: PlayingFieldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayingFieldService", function() { return PlayingFieldService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var API_URL = '/api';
var PlayingFieldService = /** @class */ (function () {
    function PlayingFieldService(http) {
        this.http = http;
    }
    PlayingFieldService.prototype.deletePFAvailability = function (id) {
        return this.http.delete(API_URL + "/worker/playingField/playingFieldAvailability/" + id);
    };
    PlayingFieldService.prototype.getPFSetup = function (id) {
        return this.http.get(API_URL + "/playingField/" + id + "/setup");
    };
    PlayingFieldService.prototype.getPFAvailabilities = function (id, showAll) {
        return this.http.get(API_URL + "/playingField/availabilities/" + id, { params: { showAll: showAll } });
    };
    PlayingFieldService.prototype.getMatches = function (id, searchDto, httpParams) {
        return this.http.post(API_URL + "/playingField/" + id + "/matches/search", searchDto, { params: httpParams });
    };
    PlayingFieldService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PlayingFieldService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlayingFieldService);
    return PlayingFieldService;
}());



/***/ }),

/***/ "./src/app/shared/service/register-worker.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/service/register-worker.service.ts ***!
  \***********************************************************/
/*! exports provided: RegisterWorkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterWorkerService", function() { return RegisterWorkerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var API_URL = '/api';
var RegisterWorkerService = /** @class */ (function () {
    function RegisterWorkerService(http) {
        this.http = http;
    }
    // registerWorker(userCredentials: UserCredentials, file:File){
    //   let formData = new FormData();
    //   formData.append('file', file);
    //   formData.append('userCredentials', '{ "username": "'+  userCredentials.username +'",'+ '"password":"'+userCredentials.password + '"}')
    //   return this.http
    //     .post(`${API_URL}/workerRequests/worker/signup`, formData
    //     );
    // }
    RegisterWorkerService.prototype.getWorkerRequests = function () {
        return this.http.get(API_URL + "/workerRequests");
    };
    RegisterWorkerService.prototype.acceptWorkerRequest = function (id) {
        var params = { "decision": "true" };
        return this.http.put(API_URL + "/workerRequests/" + id, null, { params: params });
    };
    RegisterWorkerService.prototype.declineWorkerRequest = function (id) {
        var params = { "decision": "false" };
        return this.http.put(API_URL + "/workerRequests/" + id, null, { params: params });
    };
    RegisterWorkerService.prototype.sendRequestToAssignPF = function (pf, file) {
        var formData = new FormData();
        formData.append('file', file);
        formData.append('playingField', '{ "apiId": "' + pf.apiId + '",' + '"name": "' + pf.name + '",' + '"lat":"' + pf.location.lat + '",' +
            '"lng":"' + pf.location.lng + '",' + '"formattedAddress":"' + pf.location.formattedAddress + '"}');
        return this.http.post(API_URL + "/assignToWorker", formData);
    };
    RegisterWorkerService.prototype.sendRequestToAssignPFAndRegister = function (pf, file, login, password) {
        var formData = new FormData();
        formData.append('file', file);
        formData.append('playingField', '{ "apiId": "' + pf.apiId + '",' + '"name": "' + pf.name + '",' + '"lat":"' + pf.location.lat + '",' +
            '"lng":"' + pf.location.lng + '",' + '"formattedAddress":"' + pf.location.formattedAddress + '"}');
        formData.append('username', login);
        formData.append('password', password);
        return this.http.post(API_URL + "/assignToWorkerAndRegister", formData);
    };
    RegisterWorkerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RegisterWorkerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterWorkerService);
    return RegisterWorkerService;
}());



/***/ }),

/***/ "./src/app/shared/utils/datePickerValidator.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/utils/datePickerValidator.ts ***!
  \*****************************************************/
/*! exports provided: DatePickerValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerValidator", function() { return DatePickerValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var DatePickerValidator = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DatePickerValidator, _super);
    function DatePickerValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerValidator.fromDateValidator = function (fdValue) {
        var date = fdValue.value;
        if (date === null || date === '') {
            return { requiredFromDate: true };
        }
    };
    DatePickerValidator.ToDateValidator = function (todValue) {
        var date = todValue.value;
        if (date === null || date === '') {
            return { requiredToDate: true };
        }
    };
    // Not working
    DatePickerValidator.timeValidator = function (formGroupValues) {
        console.log(formGroupValues);
        var FromDate = formGroupValues.get('FromDate').value;
        var ToDate = formGroupValues.get('ToDate').value;
        var FromTime = formGroupValues.get('FromTime').value;
        var ToTime = formGroupValues.get('ToTime').value;
        if (FromDate.toString() === ToDate.toString()) {
            var fromTime = [];
            var toTime = [];
            fromTime = FromTime.split(':');
            toTime = ToTime.split(':');
            if (parseInt(fromTime[0]) > parseInt(toTime[0])) {
                alert('condition satisfied not return any error message');
                return { InValidToTime: true };
            }
            else if (parseInt(fromTime[0]) === parseInt(toTime[0]) &&
                parseInt(fromTime[1]) > parseInt(toTime[1])) {
                alert('condition satisfied not return any error message');
                return { InValidToTime: true };
            }
        }
    };
    return DatePickerValidator;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]));



/***/ })

}]);
//# sourceMappingURL=common.js.map