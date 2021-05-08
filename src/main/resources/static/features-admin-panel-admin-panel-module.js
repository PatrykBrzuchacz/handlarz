(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-admin-panel-admin-panel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/admin-panel/components/admin-layout/admin-layout.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/admin-panel/components/admin-layout/admin-layout.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div sidenav-content>\n      <app-user-managment></app-user-managment>\n\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/admin-panel/components/user-managment/user-managment.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/admin-panel/components/user-managment/user-managment.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <mat-card>\n      <div class=\"wrapper\">\n      <h3>Zarządzanie użytkownikami</h3>\n      <table #usersTable mat-table matSort [dataSource]=\"users\" class=\"mat-elevation-z8 mt-4 user-table\">\n\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> ID. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"username\">\n        <th mat-header-cell *matHeaderCellDef> Nazwa użytkownika </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"banned\">\n        <th mat-header-cell *matHeaderCellDef> Aktywny </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.banned ? 'Zablokowany' : 'Aktywny' }} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"removed\">\n        <th mat-header-cell *matHeaderCellDef> Usunięty </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.active ? 'Nie' : 'Tak' }} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"role\">\n        <th mat-header-cell *matHeaderCellDef> Rola </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.playingFieldId ? 'Pracownik' : 'Użytkownik' }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef> Opcje </th>\n        <td mat-cell *matCellDef=\"let element\">\n\n          <button mat-raised-button color=\"primary\" *ngIf=\"element.banned == false\" class=\"mr-4\" (click)=\"banAccount(element)\">Zablokuj</button>\n          <button mat-raised-button color=\"primary\" *ngIf=\"element.banned == true\" class=\"mr-4\" (click)=\"unbanAccount(element)\">Odblokuj</button>\n\n          <button mat-raised-button color=\"warn\" class=\"mr-4\"  *ngIf=\"element.active\" (click)=\"deleteAccount(element)\">Usuń</button>\n          <button mat-raised-button color=\"warn\" class=\"mr-4\"  *ngIf=\"!element.active\" (click)=\"restoreAccount(element)\">Przywróć</button>\n\n          <button mat-raised-button color=\"warn\" class=\"mr-4\" *ngIf=\"element.playingFieldId\" (click)=\"deleteWorker(element)\">Zwolnij</button>\n\n\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator\n    #usersPaginator\n    [length]=\"usersLength\"\n    [pageSizeOptions]=\"[5, 10, 20,30]\"\n  ></mat-paginator>\n  </div>\n  </mat-card>\n\n  <mat-card>\n      <div class=\"wrapper\">\n      <h3>Zarządzanie zgłoszeniami</h3>\n    <table mat-table #workerRequestTable [dataSource]=\"workerRequest\" class=\"mat-elevation-z8 requests-table\">\n\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> ID. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"username\">\n        <th mat-header-cell *matHeaderCellDef> Nazwa użytkownika </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef> Adres orliku </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Status </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"proofOfWork\">\n        <th mat-header-cell *matHeaderCellDef> Dowód pracy </th>\n        <td mat-cell *matCellDef=\"let element\"> <div  (click)=\"openImage(element.proofOfWork)\">  <img src=\"data:image/jpg;base64,{{element.proofOfWork}}\" width=\"100px\" height=\"100px\"> </div></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"options\">\n        <th mat-header-cell *matHeaderCellDef> Opcje </th>\n        <td mat-cell *matCellDef=\"let element\">\n\n          <button mat-flat-button color=\"primary\" class=\"mr-4\" (click)=\"acceptWorkerRequest(element)\">Zaakceptuj zgłoszenie</button>\n          <button mat-flat-button color=\"primary\" class=\"mr-4\" (click)=\"declineWorkerRequest(element)\">Anuluj zgłoszenie</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedRequestColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedRequestColumns;\"></tr>\n    </table>\n  </div>\n\n</mat-card>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/functionalities/admin-panel/admin-panel-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/functionalities/admin-panel/admin-panel-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AdminPanelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelRoutingModule", function() { return AdminPanelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-layout/admin-layout.component */ "./src/app/functionalities/admin-panel/components/admin-layout/admin-layout.component.ts");
/* harmony import */ var _components_user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-managment/user-managment.component */ "./src/app/functionalities/admin-panel/components/user-managment/user-managment.component.ts");





var routes = [
    {
        path: '',
        component: _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'users'
            },
            {
                path: 'users',
                component: _components_user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_4__["UserManagmentComponent"],
            }
        ]
    }
];
var AdminPanelRoutingModule = /** @class */ (function () {
    function AdminPanelRoutingModule() {
    }
    AdminPanelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminPanelRoutingModule);
    return AdminPanelRoutingModule;
}());



/***/ }),

/***/ "./src/app/functionalities/admin-panel/admin-panel.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/functionalities/admin-panel/admin-panel.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdminPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelModule", function() { return AdminPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-managment/user-managment.component */ "./src/app/functionalities/admin-panel/components/user-managment/user-managment.component.ts");
/* harmony import */ var _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-layout/admin-layout.component */ "./src/app/functionalities/admin-panel/components/admin-layout/admin-layout.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-panel-routing.module */ "./src/app/functionalities/admin-panel/admin-panel-routing.module.ts");
/* harmony import */ var _shared_components_enlarge_image_dialog_enlarge_image_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/enlarge-image-dialog/enlarge-image-dialog.component */ "./src/app/shared/components/enlarge-image-dialog/enlarge-image-dialog.component.ts");







var AdminPanelModule = /** @class */ (function () {
    function AdminPanelModule() {
    }
    AdminPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_2__["UserManagmentComponent"], _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"]],
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPanelRoutingModule"],
            ],
            providers: [],
            entryComponents: [
                _shared_components_enlarge_image_dialog_enlarge_image_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EnlargeImageDialogComponent"]
            ]
        })
    ], AdminPanelModule);
    return AdminPanelModule;
}());



/***/ }),

/***/ "./src/app/functionalities/admin-panel/components/admin-layout/admin-layout.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/functionalities/admin-panel/components/admin-layout/admin-layout.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  overflow: auto;\n  height: calc(100% - 65px);\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb25hbGl0aWVzL2FkbWluLXBhbmVsL2NvbXBvbmVudHMvYWRtaW4tbGF5b3V0L0Q6XFxtdnBcXHBsYXlpbmdmaWVsZG1hbmFnbWVudFxcZnJvbnRlbmQvc3JjXFxhcHBcXGZ1bmN0aW9uYWxpdGllc1xcYWRtaW4tcGFuZWxcXGNvbXBvbmVudHNcXGFkbWluLWxheW91dFxcYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mdW5jdGlvbmFsaXRpZXMvYWRtaW4tcGFuZWwvY29tcG9uZW50cy9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG92ZXJmbG93OmF1dG87XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NXB4KTtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/functionalities/admin-panel/components/admin-layout/admin-layout.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/functionalities/admin-panel/components/admin-layout/admin-layout.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-layout',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/admin-panel/components/admin-layout/admin-layout.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/functionalities/admin-panel/components/admin-layout/admin-layout.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/functionalities/admin-panel/components/user-managment/user-managment.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/functionalities/admin-panel/components/user-managment/user-managment.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  width: 100%;\n  margin: 30px 30px 20px 30px;\n  max-height: 450px;\n  overflow: auto; }\n  mat-card .wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n  mat-card .wrapper h3 {\n      text-align: center;\n      width: 100%;\n      color: #26c6da; }\n  mat-card .wrapper table {\n      width: 95%;\n      margin-top: 10px !important;\n      margin-bottom: 20px; }\n  mat-card .mat-column-proofOfWork {\n    width: 100px;\n    height: 40px; }\n  .requests-table img {\n  height: 100%;\n  width: 100%;\n  max-height: 80px;\n  max-width: 80px;\n  margin: 10px 0; }\n  .requests-table button {\n  width: 160px;\n  color: white; }\n  table th:last-of-type {\n  width: 40%; }\n  table td {\n  padding: 0; }\n  button {\n  cursor: pointer;\n  transition: 0.3s; }\n  button:hover {\n    transition: 0.3s;\n    opacity: 0.8; }\n  .user-table {\n  margin-bottom: 0 !important; }\n  .user-table button {\n    width: 90px; }\n  mat-paginator {\n  margin-bottom: 15px;\n  width: 95%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb25hbGl0aWVzL2FkbWluLXBhbmVsL2NvbXBvbmVudHMvdXNlci1tYW5hZ21lbnQvRDpcXG12cFxccGxheWluZ2ZpZWxkbWFuYWdtZW50XFxmcm9udGVuZC9zcmNcXGFwcFxcZnVuY3Rpb25hbGl0aWVzXFxhZG1pbi1wYW5lbFxcY29tcG9uZW50c1xcdXNlci1tYW5hZ21lbnRcXHVzZXItbWFuYWdtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mdW5jdGlvbmFsaXRpZXMvYWRtaW4tcGFuZWwvY29tcG9uZW50cy91c2VyLW1hbmFnbWVudC9EOlxcbXZwXFxwbGF5aW5nZmllbGRtYW5hZ21lbnRcXGZyb250ZW5kL3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTtFQUpoQjtJQU1JLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQixFQUFBO0VBVDFCO01BV00sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxjQ2ZXLEVBQUE7RURFakI7TUFnQk0sVUFBVTtNQUNWLDJCQUEyQjtNQUMzQixtQkFBbUIsRUFBQTtFQWxCekI7SUFzQkksWUFBWTtJQUNaLFlBQVksRUFBQTtFQUloQjtFQUVJLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjLEVBQUE7RUFObEI7RUFVSSxZQUFZO0VBQ1osWUFBWSxFQUFBO0VBSWhCO0VBR00sVUFBUyxFQUFBO0VBSGY7RUFPSSxVQUNGLEVBQUE7RUFHRjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUZsQjtJQUtJLGdCQUFnQjtJQUNoQixZQUNGLEVBQUE7RUFHRjtFQUNFLDJCQUEwQixFQUFBO0VBRDVCO0lBSUUsV0FBVSxFQUFBO0VBR1o7RUFDRSxtQkFBa0I7RUFDbEIsVUFBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZnVuY3Rpb25hbGl0aWVzL2FkbWluLXBhbmVsL2NvbXBvbmVudHMvdXNlci1tYW5hZ21lbnQvdXNlci1tYW5hZ21lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMzBweCAzMHB4IDIwcHggMzBweCA7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGgzIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIH1cbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gIH1cbiAgLm1hdC1jb2x1bW4tcHJvb2ZPZldvcmsge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cblxuLnJlcXVlc3RzLXRhYmxlIHtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogODBweDtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgbWFyZ2luOjEwcHggMCA7XG4gIH1cblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxudGFibGUge1xuICB0aHtcbiAgICAmOmxhc3Qtb2YtdHlwZXtcbiAgICAgIHdpZHRoOjQwJTtcbiAgICB9XG4gIH1cbiAgdGR7XG4gICAgcGFkZGluZzowXG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgb3BhY2l0eTowLjhcbiAgfVxufVxuXG4udXNlci10YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206MCAhaW1wb3J0YW50O1xuXG5idXR0b24ge1xuICB3aWR0aDo5MHB4O1xufVxufVxubWF0LXBhZ2luYXRvciB7XG4gIG1hcmdpbi1ib3R0b206MTVweDtcbiAgd2lkdGg6OTUlO1xufVxuIiwiJHByaW1hcnk6ICMyNmM2ZGE7XHJcbiRwcmltYXJ5SG92ZXI6ICMyMmI0YzQ7XHJcbiRwcmltYXJ5QmV0YTogIzkyZWVmYTtcclxuJHByaW1hcnlMaWdodDojYTdmMGZhO1xyXG4kcHJpbWFyeUxpZ2h0ZXI6ICNjZmY5ZmY7XHJcbiRhY2NlbnRDb2xvcjogIzQ1NWE2NDtcclxuJGFjY2VudENvbG9yQWxwaGE6ICM1Yzc4ODY7XHJcbiRhY2NlbnRDb2xvckFscGhhSG92ZXI6ICM0NTVhNjQ7XHJcbiRkcm9wZG93bkFycm93Q29sb3I6ICM0NDQ0NDQ7XHJcbiR0ZXh0QnV0dG9uQ29sb3I6IHdoaXRlO1xyXG4kdGV4dENvbG9yOiBibGFjaztcclxuJGlucHV0VHlwZUhvdmVyOiAjZWJlYmViO1xyXG4kY2hlY2tUcnVlOiByZ2IoNSwgMjA3LCA1KTtcclxuJGZhbHNlSWNvbjogcmVkO1xyXG4kZHJvcHpvbmU6ICNhYWFhYWE7XHJcbiRzY3JvbGxCYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiRjb2xvci1kZWZhdWx0LWJnOiBsaWdodGdyZXk7XHJcbiR0aC1wcmltYXJ5OiBibGFjaztcclxuJGNvbG9yLXNlcGFyYXRvci1saWdodGVyOiBsaWdodGdyZXk7XHJcbiRjb2xvci10ZXh0LWludmVyc2U6IHdoaXRlO1xyXG4kY29sb3ItdGV4dC1kaXNhYmxlZDogI2FhYWFhYTtcclxuJGNvbG9yLWhvdmVyOiAjMGNhOGJjO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX21peGluc1wiO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoeHM6IDAsXHJcbiAgc206IDYwMHB4LFxyXG4gIG1kOiA4MDBweCxcclxuICBsZzogMTAwMHB4LFxyXG4gIHhsOiAxMjgwcHgpO1xyXG5cclxuLy8gQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXBcIjtcclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoc206IDYwMHB4LFxyXG4gIG1kOiA4MDBweCxcclxuICBsZzogMTAwMHB4LFxyXG4gIHhsOiAxMjIwcHgpO1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/functionalities/admin-panel/components/user-managment/user-managment.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/functionalities/admin-panel/components/user-managment/user-managment.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UserManagmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagmentComponent", function() { return UserManagmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/service/user.service */ "./src/app/shared/service/user.service.ts");
/* harmony import */ var _app_shared_service_register_worker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/service/register-worker.service */ "./src/app/shared/service/register-worker.service.ts");
/* harmony import */ var _app_shared_components_enlarge_image_dialog_enlarge_image_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/enlarge-image-dialog/enlarge-image-dialog.component */ "./src/app/shared/components/enlarge-image-dialog/enlarge-image-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var UserManagmentComponent = /** @class */ (function () {
    function UserManagmentComponent(userService, registerWorkerService, dialog) {
        this.userService = userService;
        this.registerWorkerService = registerWorkerService;
        this.dialog = dialog;
        this.displayedColumns = [
            "id",
            "username",
            "banned",
            "removed",
            "role",
            "action"
        ];
        this.displayedRequestColumns = [
            "id",
            "username",
            "address",
            "status",
            "proofOfWork",
            "options"
        ];
    }
    UserManagmentComponent.prototype.ngOnInit = function () {
        this.handleUserTable();
        this.getWorkerRequests();
    };
    UserManagmentComponent.prototype.getWorkerRequests = function () {
        var _this = this;
        this.registerWorkerService.getWorkerRequests().subscribe(function (workers) {
            workers.forEach(function (val) {
                if (val.status === "SENDED") {
                    val.status = "Oczekujące";
                }
            });
            _this.workerRequest = workers;
        });
    };
    UserManagmentComponent.prototype.acceptWorkerRequest = function (workerRequest) {
        var _this = this;
        this.registerWorkerService
            .acceptWorkerRequest(workerRequest.id)
            .subscribe(function () {
            _this.workerRequest.splice(_this.workerRequest.indexOf(workerRequest), 1);
            _this.workerRequestTable.renderRows();
            var user = _this.users.find(function (val) { return (val.username = workerRequest.username); });
            user.playingFieldId = workerRequest.pfId;
            _this.usersTable.renderRows();
        });
    };
    UserManagmentComponent.prototype.declineWorkerRequest = function (workerRequest) {
        var _this = this;
        this.registerWorkerService
            .declineWorkerRequest(workerRequest.id)
            .subscribe(function () {
            _this.workerRequest.splice(_this.workerRequest.indexOf(workerRequest), 1);
            _this.workerRequestTable.renderRows();
        });
    };
    UserManagmentComponent.prototype.banAccount = function (user) {
        this.userService.banUser(user.id).subscribe(function (resp) {
            user.banned = true;
        });
    };
    UserManagmentComponent.prototype.deleteAccount = function (user) {
        this.userService.deleteUser(user.id).subscribe(function (resp) {
            user.active = false;
        });
    };
    UserManagmentComponent.prototype.unbanAccount = function (user) {
        this.userService.unbanUser(user.id).subscribe(function (resp) {
            user.banned = false;
        });
    };
    UserManagmentComponent.prototype.openImage = function (image) {
        this.dialog.open(_app_shared_components_enlarge_image_dialog_enlarge_image_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EnlargeImageDialogComponent"], {
            data: { image: image },
            panelClass: "custom-enlarge-dialog-container"
        });
    };
    UserManagmentComponent.prototype.deleteWorker = function (worker) {
        this.userService.deleteWorker(worker.id).subscribe(function (val) {
            worker.playingFieldId = null;
        });
    };
    UserManagmentComponent.prototype.restoreAccount = function (user) {
        this.userService.restoreAccount(user.id).subscribe(function (val) {
            user.active = true;
        });
    };
    UserManagmentComponent.prototype.handleUserTable = function () {
        var _this = this;
        this.usersPaginator.pageSize = 5;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.sort.sortChange, this.usersPaginator.page, this.usersPaginator.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () {
            var params = {
                sort: "",
                page: _this.usersPaginator.pageIndex + "",
                size: _this.usersPaginator.pageSize + ""
            };
            return _this.userService.getUsersForAdmin(params);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
            _this.usersLength = data.totalElements;
            return data.content;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])([]);
        }))
            .subscribe(function (data) { return (_this.users = data); });
    };
    UserManagmentComponent.ctorParameters = function () { return [
        { type: _app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _app_shared_service_register_worker_service__WEBPACK_IMPORTED_MODULE_3__["RegisterWorkerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("usersTable", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTable"])
    ], UserManagmentComponent.prototype, "usersTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("workerRequestTable", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTable"])
    ], UserManagmentComponent.prototype, "workerRequestTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], UserManagmentComponent.prototype, "usersPaginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], UserManagmentComponent.prototype, "sort", void 0);
    UserManagmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-managment",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-managment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/admin-panel/components/user-managment/user-managment.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-managment.component.scss */ "./src/app/functionalities/admin-panel/components/user-managment/user-managment.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _app_shared_service_register_worker_service__WEBPACK_IMPORTED_MODULE_3__["RegisterWorkerService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], UserManagmentComponent);
    return UserManagmentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=features-admin-panel-admin-panel-module.js.map