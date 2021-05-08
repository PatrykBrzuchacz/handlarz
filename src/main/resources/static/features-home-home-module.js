(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/home/components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/home/components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!isLogged(); else elseContainer\">\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"sendRequest()\">\n          <h3>Zarejestruj się jako pracownik</h3>\n\n        <mat-form-field>\n          <input\n            matInput\n            type=\"text\"\n            id=\"login\"\n            formControlName=\"login\"\n            placeholder=\"Nazwa użytkownika\"\n          />\n\n          <mat-error\n            *ngIf=\"registerForm.controls['login'].hasError('required')\"\n          >\n            Nazwa użytkownika jest <strong>wymagana</strong>\n          </mat-error>\n          <mat-error\n            *ngIf=\"registerForm.controls['login'].hasError('minlength')\"\n          >\n            Nazwa użytkownika jest <strong>za krótka</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input\n            matInput\n            type=\"password\"\n            name=\"password\"\n            formControlName=\"password\"\n            placeholder=\"Hasło\"\n            [type]=\"hidingPassword ? 'password' : 'text'\"\n          />\n\n          <mat-icon matSuffix (click)=\"hidingPassword = !hidingPassword\">{{\n            hidingPassword ? 'visibility_off' : 'visibility'\n          }}</mat-icon>\n          <mat-error\n            *ngIf=\"registerForm.controls['password'].hasError('required')\"\n          >\n            Hasło jest <strong>wymagane</strong>\n          </mat-error>\n          <mat-error\n            *ngIf=\"registerForm.controls['password'].hasError('minlength')\"\n          >\n            Hasło jest <strong>za krótkie</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input\n            matInput\n            type=\"password\"\n            name=\"passwordConfirm\"\n            formControlName=\"passwordConfirm\"\n            placeholder=\"Potwierdź hasło\"\n            compare=\"password\"\n            [type]=\"hidingPasswordConfirm ? 'password' : 'text'\"\n          />\n          <mat-icon\n            matSuffix\n            (click)=\"hidingPasswordConfirm = !hidingPasswordConfirm\"\n            >{{\n              hidingPasswordConfirm ? 'visibility_off' : 'visibility'\n            }}</mat-icon\n          >\n          <mat-error *ngIf=\"registerForm.controls['passwordConfirm'].hasError\">\n            Hasła muszą być <strong>takie same</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <div\n        class=\"uploadfilecontainer\"\n        (click)=\"fileInput.click()\"\n        appDragDrop\n        (onFileDropped)=\"onFileImport($event)\"\n        >\n\n        <input\n          hidden\n          type=\"file\"\n          #fileInput\n          (change)=\"onFileImport($event.target.files)\"\n        />\n        <svg-icon\n          class=\"upload-icon\"\n          src=\"assets/icons/upload-solid.svg\"\n        ></svg-icon>\n        <h3>Dodaj dowód potwierdzający pracę </h3>\n        <div class=\"file-section\" *ngIf=\"image\">\n          <img [src]=\"image\">\n          <div class=\"close-icon\" (click)=\"onFileImport()\">\n            <svg-icon src=\"assets/icons/times-solid.svg\"></svg-icon>\n          </div>\n        </div>\n\n        </div>\n\n        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!selectedFile\">Wyślij</button>\n      </form>\n\n</ng-container>\n\n<ng-template #elseContainer>\n  <ng-container>\n    <div class=\"container\">\n      <div class=\"row\">\n        <form (ngSubmit)=\"sendRequestWhenLoggedIn()\">\n            <div\n            class=\"uploadfilecontainer\"\n            (click)=\"fileInput.click()\"\n            appDragDrop\n            (onFileDropped)=\"onFileImport($event)\"\n            >\n\n            <input\n              hidden\n              type=\"file\"\n              #fileInput\n              (change)=\"onFileImport($event.target.files)\"\n            />\n            <svg-icon\n              class=\"upload-icon\"\n              src=\"assets/icons/upload-solid.svg\"\n            ></svg-icon>\n            <h3>Dodaj dowód potwierdzający pracę</h3>\n            <div class=\"file-section\" *ngIf=\"selectedFile\">\n              <img [src]=\"image\">\n              <div class=\"close-icon\" (click)=\"onFileImport()\">\n                <svg-icon src=\"assets/icons/times-solid.svg\"></svg-icon>\n              </div>\n            </div>\n\n            </div>\n\n          <button mat-raised-button color=\"primary\" type=\"submit\">Wyślij</button>\n        </form>\n      </div>\n    </div>\n  </ng-container>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/home/components/main-page/main-page.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/home/components/main-page/main-page.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div nav-list-items>\n  <div class=\"mt-4 container\">\n<!-- <h3 class=\"mat-h2\">Wybierz lokalizacje</h3> -->\n\n\n<mat-card>\n<div class=\"map\">\n      <div class=\"container  form d-flex justify-content-between\">\n        <mat-form-field>\n          <input\n            type=\"text\"\n            placeholder=\"Podaj lokalizację\"\n            matInput\n            [formControl]=\"selectedLocationControl\"\n            [matAutocomplete]=\"autoComplete\"\n          />\n          <mat-autocomplete\n            #autoComplete=\"matAutocomplete\"\n            (optionSelected)=\"setLocation($event)\"\n          >\n            <mat-option\n              *ngFor=\"let option of locations | async\"\n              [value]=\"option.formatted_address\"\n            >\n              {{ option.formatted_address }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n        <mat-icon class=\"localization-icon\" matTooltip=\"Wyśrodkuj do twojej lokalizajci\" (click)=\"resetLocation()\">my_location</mat-icon>\n      </div>\n      <agm-map\n      #map\n        [latitude]=\"userLocation?.lat\"\n        [longitude]=\"userLocation?.lng\"\n        [zoom]=\"userLocation?.zoom\"\n        (mapReady)=\"mapReady($event)\"\n        (centerChange)=\"centerChange($event)\"\n      >\n        <agm-marker\n          [iconUrl]=\"{ url: customerMapIcon, labelOrigin: { x: 15, y: -8 } }\"\n          [latitude]=\"userLocationClone?.lat\"\n          [longitude]=\"userLocationClone?.lng\"\n          [label]=\"customerLabel\"\n        >\n          <agm-info-window>\n            <p class=\"info-content bold\">Tu jesteś</p>\n          </agm-info-window>\n        </agm-marker>\n        <span *ngIf=\"playingFieldList\">\n          <agm-info-window>\n            <agm-marker\n              (markerClick)=\"markerClick(infoWindow)\"\n              *ngFor=\"let pf of playingFieldList\"\n              [iconUrl]=\"{\n                url: getIcon(pf),\n                labelOrigin: { x: 15, y: -8 }\n              }\"\n              [latitude]=\"pf?.location?.lat\"\n              [longitude]=\"pf?.location?.lng\"\n              [label]=\"pf?.name\"\n            >\n              <agm-info-window #infoWindow>\n                <div class=\"d-flex justify-content-between\">\n                <p class=\"info-content bold\" style=\"margin-top:5px;\">{{ pf?.name }}</p>\n                 <div *ngIf=\"pf?.rate\" class=\"d-flex\" style=\"margin-top:10px;\">\n                <p class=\"info-content bold\" style=\"font-size:14px\">{{ pf?.rate }} </p>\n                  <div\n                  class=\"main-star-icon\">\n                  <mat-icon style=\"color:#eeee00;margin-top:-10px\" class=\"main-star\">star</mat-icon>\n                </div>\n              </div>\n              </div>\n                <p class=\"info-content\" *ngIf=\"pf?.location?.formattedAddress\">\n                  Adres: {{ pf?.location?.formattedAddress }}\n                </p>\n                <div class=\"button-wrapper\">\n                  <button\n                    mat-raised-button\n                    color=\"primary\"\n                    *ngIf=\"pf?.registered && pf?.active\"\n                    [routerLink]=\"['/playingField/', pf.id]\"\n\n                  >\n                    Otwórz orlik\n                  </button>\n\n                  <button\n                    mat-raised-button\n                    color=\"primary\"\n                    *ngIf=\"!pf?.registered && isLogged()\"\n                    (click)=\"assignPFAndRegisterDialog(pf)\"\n                  >\n                    Przypisz orlik do konta\n                  </button>\n\n                  <button\n                    [routerLink]=\"['/worker/playingField/', pf.id]\"\n                    mat-raised-button\n                    class=\"second-button\"\n                    color=\"primary\"\n                    *ngIf=\"isPFOwner(pf)\"\n                  >\n                    Otwórz menu orlika\n                  </button>\n                  <button\n                    mat-raised-button\n                    color=\"primary\"\n                    *ngIf=\"!pf?.registered && !isLogged()\"\n                    (click)=\"assignPFAndRegisterDialog(pf)\"\n                  >\n                    Zarejestruj się jako pracownik\n                  </button>\n                </div>\n              </agm-info-window>\n            </agm-marker>\n          </agm-info-window>\n        </span>\n      </agm-map>\n    </div>\n  </mat-card>\n    <!-- <ng-container *ngIf=\"chooseLocation.checked\">\n      <div class=\"container mt-5 mat-elevation-z10\">\n        <mat-form-field>\n          <input\n            type=\"text\"\n            placeholder=\"Podaj lokalizację\"\n            matInput\n            [formControl]=\"selectedLocationControl\"\n            [matAutocomplete]=\"autoComplete\"\n          />\n          <mat-autocomplete\n            #autoComplete=\"matAutocomplete\"\n            (optionSelected)=\"setLocation($event)\"\n          >\n            <mat-option\n              *ngFor=\"let option of locations | async\"\n              [value]=\"option.formatted_address\"\n            >\n              {{ option.formatted_address }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n\n      <div class=\"row\">\n        <agm-map\n          [latitude]=\"selectedLocation.lat\"\n          [longitude]=\"selectedLocation.lng\"\n          [zoom]=\"selectedLocation.zoom\"\n          (mapReady)=\"mapReady($event)\"\n          (centerChange)=\"centerChange($event)\"\n        >\n          <agm-marker\n            [iconUrl]=\"{ url: customerMapIcon, labelOrigin: { x: 15, y: -8 } }\"\n            [latitude]=\"userLocation.lat\"\n            [longitude]=\"userLocation.lng\"\n            [label]=\"customerLabel\"\n          >\n            <agm-info-window>\n              <p class=\"info-content bold\">Tu jesteś</p>\n            </agm-info-window>\n          </agm-marker>\n\n          <agm-marker\n            (markerClick)=\"markerClick(infoWindow)\"\n            *ngFor=\"let pf of playingFieldList\"\n            [iconUrl]=\"{\n              url: getIcon(pf?.registered),\n              labelOrigin: { x: 15, y: -8 }\n            }\"\n            [latitude]=\"pf?.location?.lat\"\n            [longitude]=\"pf?.location?.lng\"\n            [label]=\"pf?.name\"\n          >\n            <agm-info-window #infoWindow>\n              <p class=\"info-content bold\">{{ pf?.name }}</p>\n              <p class=\"info-content\" *ngIf=\"pf?.location?.formattedAddress\">\n                Adres: {{ pf?.location?.formattedAddress }}\n              </p>\n\n              <button mat-raised-button color=\"primary\" *ngIf=\"pf?.registered\">\n                Rezerwuj orlik\n              </button>\n\n              <button\n                mat-raised-button\n                color=\"primary\"\n                *ngIf=\"!pf?.registered && isLogged()\"\n                (click)=\"assignPFAndRegisterDialog(pf)\"\n              >\n                Przypisz orlik do konta\n              </button>\n\n              <button\n                mat-raised-button\n                color=\"primary\"\n                *ngIf=\"!pf?.registered && !isLogged()\"\n                (click)=\"assignPFAndRegisterDialog(pf)\"\n              >\n                Zarejestruj się jako pracownik\n              </button>\n            </agm-info-window>\n          </agm-marker>\n        </agm-map>\n      </div>\n    </ng-container> -->\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/functionalities/home/components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/functionalities/home/components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%; }\n  form h3 {\n    margin-bottom: 30px;\n    text-align: center;\n    color: #26c6da; }\n  form button {\n    margin: 20px;\n    width: 150px; }\n  .uploadfilecontainer {\n  background-repeat: no-repeat;\n  background-size: 100px;\n  background-position: center;\n  margin: 20px auto;\n  border: 2px dashed #26c6da;\n  border-radius: 10px;\n  position: relative;\n  width: 100%;\n  height: 180px; }\n  .uploadfilecontainer:hover {\n    cursor: pointer;\n    transition: 0.3s;\n    border: 2px dashed white;\n    background-color: #455a64 !important;\n    opacity: 0.8; }\n  .uploadfilecontainer:hover .upload-icon {\n      transition: 0.3s;\n      color: white; }\n  .uploadfilecontainer:hover h3 {\n      transition: 0.3s;\n      color: white; }\n  .uploadfilecontainer .file-section {\n    position: absolute;\n    top: 65%;\n    width: 100%;\n    height: 30px;\n    display: flex;\n    justify-content: center; }\n  .uploadfilecontainer .file-section img {\n      position: relative;\n      height: 50px;\n      width: 50px; }\n  .uploadfilecontainer .file-section .close-icon {\n      margin-left: 6px;\n      color: red;\n      width: 15px;\n      cursor: pointer;\n      z-index: 5; }\n  .uploadfilecontainer .file-section .close-icon:hover {\n        transform: scale(1.2);\n        transition: 0.3s; }\n  .uploadfilecontainer .upload-icon {\n    position: absolute;\n    left: calc(50% - 27px);\n    top: 12%;\n    width: 55px;\n    color: #5c7886; }\n  .uploadfilecontainer h3 {\n    position: absolute;\n    top: 45%;\n    color: #26c6da;\n    margin: 0 20px;\n    text-align: center; }\n  mat-form-field {\n  margin: 1.5%;\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb25hbGl0aWVzL2hvbWUvY29tcG9uZW50cy9hc3NpZ24tcGxheWluZy1maWVsZC1hbmQtcmVnaXN0ZXItZGlhbG9nL0Q6XFxtdnBcXHBsYXlpbmdmaWVsZG1hbmFnbWVudFxcZnJvbnRlbmQvc3JjXFxhcHBcXGZ1bmN0aW9uYWxpdGllc1xcaG9tZVxcY29tcG9uZW50c1xcYXNzaWduLXBsYXlpbmctZmllbGQtYW5kLXJlZ2lzdGVyLWRpYWxvZ1xcYXNzaWduLXBsYXlpbmctZmllbGQtYW5kLXJlZ2lzdGVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZnVuY3Rpb25hbGl0aWVzL2hvbWUvY29tcG9uZW50cy9hc3NpZ24tcGxheWluZy1maWVsZC1hbmQtcmVnaXN0ZXItZGlhbG9nL0Q6XFxtdnBcXHBsYXlpbmdmaWVsZG1hbmFnbWVudFxcZnJvbnRlbmQvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVUsRUFBQTtFQUxaO0lBT0ksbUJBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQ1hhLEVBQUE7RURFakI7SUFZSSxZQUFXO0lBQ1gsWUFBVyxFQUFBO0VBS2Y7RUFDRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsMEJDekJlO0VEMEJmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWEsRUFBQTtFQVRmO0lBWUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFFeEIsb0NBQW1EO0lBQ25ELFlBQVksRUFBQTtFQWpCaEI7TUFvQk0sZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtFQXJCbEI7TUF5Qk0sZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtFQTFCbEI7SUE4Qk0sa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUIsRUFBQTtFQW5DN0I7TUFzQ1Esa0JBQWlCO01BQ2pCLFlBQVc7TUFDWCxXQUFVLEVBQUE7RUF4Q2xCO01BMkNRLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsV0FBVztNQUNYLGVBQWU7TUFDZixVQUFVLEVBQUE7RUEvQ2xCO1FBa0RVLHFCQUFxQjtRQUNyQixnQkFDRixFQUFBO0VBcERSO0lBMERJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxjQzVFc0IsRUFBQTtFRGMxQjtJQW1FSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGNDekZhO0lEMEZiLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtFQUt0QjtFQUNFLFlBQVc7RUFDWCxZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mdW5jdGlvbmFsaXRpZXMvaG9tZS9jb21wb25lbnRzL2Fzc2lnbi1wbGF5aW5nLWZpZWxkLWFuZC1yZWdpc3Rlci1kaWFsb2cvYXNzaWduLXBsYXlpbmctZmllbGQtYW5kLXJlZ2lzdGVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46MjBweDtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi51cGxvYWRmaWxlY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAkcHJpbWFyeTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgd2hpdGU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudENvbG9yQWxwaGFIb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG5cclxuICAgIC51cGxvYWQtaWNvbiB7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgICAuZmlsZS1zZWN0aW9uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDY1JTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNsb3NlLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAudXBsb2FkLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyN3B4KTtcclxuICAgIHRvcDogMTIlO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBjb2xvcjogJGFjY2VudENvbG9yQWxwaGE7XHJcblxyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOjEuNSU7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbn1cclxuIiwiJHByaW1hcnk6ICMyNmM2ZGE7XHJcbiRwcmltYXJ5SG92ZXI6ICMyMmI0YzQ7XHJcbiRwcmltYXJ5QmV0YTogIzkyZWVmYTtcclxuJHByaW1hcnlMaWdodDojYTdmMGZhO1xyXG4kcHJpbWFyeUxpZ2h0ZXI6ICNjZmY5ZmY7XHJcbiRhY2NlbnRDb2xvcjogIzQ1NWE2NDtcclxuJGFjY2VudENvbG9yQWxwaGE6ICM1Yzc4ODY7XHJcbiRhY2NlbnRDb2xvckFscGhhSG92ZXI6ICM0NTVhNjQ7XHJcbiRkcm9wZG93bkFycm93Q29sb3I6ICM0NDQ0NDQ7XHJcbiR0ZXh0QnV0dG9uQ29sb3I6IHdoaXRlO1xyXG4kdGV4dENvbG9yOiBibGFjaztcclxuJGlucHV0VHlwZUhvdmVyOiAjZWJlYmViO1xyXG4kY2hlY2tUcnVlOiByZ2IoNSwgMjA3LCA1KTtcclxuJGZhbHNlSWNvbjogcmVkO1xyXG4kZHJvcHpvbmU6ICNhYWFhYWE7XHJcbiRzY3JvbGxCYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiRjb2xvci1kZWZhdWx0LWJnOiBsaWdodGdyZXk7XHJcbiR0aC1wcmltYXJ5OiBibGFjaztcclxuJGNvbG9yLXNlcGFyYXRvci1saWdodGVyOiBsaWdodGdyZXk7XHJcbiRjb2xvci10ZXh0LWludmVyc2U6IHdoaXRlO1xyXG4kY29sb3ItdGV4dC1kaXNhYmxlZDogI2FhYWFhYTtcclxuJGNvbG9yLWhvdmVyOiAjMGNhOGJjO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX21peGluc1wiO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoeHM6IDAsXHJcbiAgc206IDYwMHB4LFxyXG4gIG1kOiA4MDBweCxcclxuICBsZzogMTAwMHB4LFxyXG4gIHhsOiAxMjgwcHgpO1xyXG5cclxuLy8gQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXBcIjtcclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoc206IDYwMHB4LFxyXG4gIG1kOiA4MDBweCxcclxuICBsZzogMTAwMHB4LFxyXG4gIHhsOiAxMjIwcHgpO1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/functionalities/home/components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/functionalities/home/components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: AssignPlayingFieldAndRegisterDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPlayingFieldAndRegisterDialogComponent", function() { return AssignPlayingFieldAndRegisterDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_shared_service_register_worker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/service/register-worker.service */ "./src/app/shared/service/register-worker.service.ts");
/* harmony import */ var _app_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/service */ "./src/app/core/service/index.ts");







var AssignPlayingFieldAndRegisterDialogComponent = /** @class */ (function () {
    function AssignPlayingFieldAndRegisterDialogComponent(dialogRef, data, toastr, registerWorkerService, authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.toastr = toastr;
        this.registerWorkerService = registerWorkerService;
        this.authService = authService;
        this.sendError = false;
        this.hidingPassword = true;
        this.hidingPasswordConfirm = true;
    }
    AssignPlayingFieldAndRegisterDialogComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    AssignPlayingFieldAndRegisterDialogComponent.prototype.onFileImport = function (event) {
        this.createImageFromBlob(event[0]);
        this.selectedFile = event[0];
    };
    AssignPlayingFieldAndRegisterDialogComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.image = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    AssignPlayingFieldAndRegisterDialogComponent.prototype.sendRequestWhenLoggedIn = function () {
        var _this = this;
        this.registerWorkerService
            .sendRequestToAssignPF(this.data.playingField, this.selectedFile)
            .subscribe(function (success) { }, function (error) {
            _this.toastr.error('Wystąpił błąd');
        }, function () {
            _this.dialogRef.close();
            _this.toastr.success('Prośba została wysłana, teraz musi Pan/i poczekać na weryfikację, dziękujemy');
        });
    };
    AssignPlayingFieldAndRegisterDialogComponent.prototype.sendRequest = function () {
        var _this = this;
        this.registerWorkerService
            .sendRequestToAssignPFAndRegister(this.data.playingField, this.selectedFile, this.registerForm.value.login, this.registerForm.value.password)
            .subscribe(function (success) { }, function (error) {
            _this.toastr.error('Wystąpił błąd');
        }, function () {
            _this.dialogRef.close();
            _this.toastr.success('Prośba została wysłana, dziękujemy');
        });
    };
    AssignPlayingFieldAndRegisterDialogComponent.prototype.isLogged = function () {
        return this.authService.isLogged();
    };
    AssignPlayingFieldAndRegisterDialogComponent.prototype.isWorker = function () {
        return this.authService.isWorker();
    };
    AssignPlayingFieldAndRegisterDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _app_shared_service_register_worker_service__WEBPACK_IMPORTED_MODULE_5__["RegisterWorkerService"] },
        { type: _app_core_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    AssignPlayingFieldAndRegisterDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assign-playing-field-and-register-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assign-playing-field-and-register-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/home/components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assign-playing-field-and-register-dialog.component.scss */ "./src/app/functionalities/home/components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _app_shared_service_register_worker_service__WEBPACK_IMPORTED_MODULE_5__["RegisterWorkerService"],
            _app_core_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], AssignPlayingFieldAndRegisterDialogComponent);
    return AssignPlayingFieldAndRegisterDialogComponent;
}());



/***/ }),

/***/ "./src/app/functionalities/home/components/main-page/main-page.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/functionalities/home/components/main-page/main-page.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  overflow: auto;\n  height: calc(100% - 65px);\n  width: 100%; }\n\n.input-row-container {\n  background-color: rgba(92, 92, 92, 0.356); }\n\n.map {\n  display: flex;\n  width: 100%;\n  height: 70vh;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px 20px 20px 20px; }\n\n.map .form {\n    padding-left: 20px;\n    width: 100%; }\n\n.map .localization-icon {\n    font-size: 40px;\n    color: #26c6da;\n    cursor: pointer;\n    transition: 0.3s; }\n\n.map .localization-icon:hover {\n      color: #5c7886;\n      transition: 0.3s;\n      transform: scale(1.1); }\n\n.map agm-map {\n    height: 100%;\n    width: 100%; }\n\n.info-content {\n  color: black !important; }\n\n.bold {\n  font-weight: bold; }\n\n.tooltip-reservation {\n  font-size: 0.8rem;\n  background-color: #b71c1c; }\n\n.button-wrapper {\n  display: flex;\n  justify-content: space-around; }\n\nimg {\n  box-shadow: none; }\n\n.second-button {\n  margin-left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVuY3Rpb25hbGl0aWVzL2hvbWUvY29tcG9uZW50cy9tYWluLXBhZ2UvRDpcXG12cFxccGxheWluZ2ZpZWxkbWFuYWdtZW50XFxmcm9udGVuZC9zcmNcXGFwcFxcZnVuY3Rpb25hbGl0aWVzXFxob21lXFxjb21wb25lbnRzXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZnVuY3Rpb25hbGl0aWVzL2hvbWUvY29tcG9uZW50cy9tYWluLXBhZ2UvRDpcXG12cFxccGxheWluZ2ZpZWxkbWFuYWdtZW50XFxmcm9udGVuZC9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFJYjtFQUNFLHlDQUF5QyxFQUFBOztBQUUzQztFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUE7O0FBTjlCO0lBUUksa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTs7QUFUZjtJQVlJLGVBQWU7SUFDZixjQ3pCYTtJRDBCYixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBZnBCO01Ba0JNLGNDeEJvQjtNRHlCcEIsZ0JBQWdCO01BQ2hCLHFCQUFxQixFQUFBOztBQXBCM0I7SUF3QkksWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFJZjtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mdW5jdGlvbmFsaXRpZXMvaG9tZS9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG5cbi5pbnB1dC1yb3ctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgOTIsIDkyLCAwLjM1Nik7XG59XG4ubWFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDIwcHg7XG4gIC5mb3JtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmxvY2FsaXphdGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJGFjY2VudENvbG9yQWxwaGE7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgfVxuICBhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmluZm8tY29udGVudCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9vbHRpcC1yZXNlcnZhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcxYzFjO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuaW1nIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNlY29uZC1idXR0b24ge1xuICBtYXJnaW4tbGVmdDozMHB4O1xufVxuIiwiJHByaW1hcnk6ICMyNmM2ZGE7XHJcbiRwcmltYXJ5SG92ZXI6ICMyMmI0YzQ7XHJcbiRwcmltYXJ5QmV0YTogIzkyZWVmYTtcclxuJHByaW1hcnlMaWdodDojYTdmMGZhO1xyXG4kcHJpbWFyeUxpZ2h0ZXI6ICNjZmY5ZmY7XHJcbiRhY2NlbnRDb2xvcjogIzQ1NWE2NDtcclxuJGFjY2VudENvbG9yQWxwaGE6ICM1Yzc4ODY7XHJcbiRhY2NlbnRDb2xvckFscGhhSG92ZXI6ICM0NTVhNjQ7XHJcbiRkcm9wZG93bkFycm93Q29sb3I6ICM0NDQ0NDQ7XHJcbiR0ZXh0QnV0dG9uQ29sb3I6IHdoaXRlO1xyXG4kdGV4dENvbG9yOiBibGFjaztcclxuJGlucHV0VHlwZUhvdmVyOiAjZWJlYmViO1xyXG4kY2hlY2tUcnVlOiByZ2IoNSwgMjA3LCA1KTtcclxuJGZhbHNlSWNvbjogcmVkO1xyXG4kZHJvcHpvbmU6ICNhYWFhYWE7XHJcbiRzY3JvbGxCYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiRjb2xvci1kZWZhdWx0LWJnOiBsaWdodGdyZXk7XHJcbiR0aC1wcmltYXJ5OiBibGFjaztcclxuJGNvbG9yLXNlcGFyYXRvci1saWdodGVyOiBsaWdodGdyZXk7XHJcbiRjb2xvci10ZXh0LWludmVyc2U6IHdoaXRlO1xyXG4kY29sb3ItdGV4dC1kaXNhYmxlZDogI2FhYWFhYTtcclxuJGNvbG9yLWhvdmVyOiAjMGNhOGJjO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX21peGluc1wiO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoeHM6IDAsXHJcbiAgc206IDYwMHB4LFxyXG4gIG1kOiA4MDBweCxcclxuICBsZzogMTAwMHB4LFxyXG4gIHhsOiAxMjgwcHgpO1xyXG5cclxuLy8gQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXBcIjtcclxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoc206IDYwMHB4LFxyXG4gIG1kOiA4MDBweCxcclxuICBsZzogMTAwMHB4LFxyXG4gIHhsOiAxMjIwcHgpO1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/functionalities/home/components/main-page/main-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/functionalities/home/components/main-page/main-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_shared_service_google_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/service/google.service */ "./src/app/shared/service/google.service.ts");
/* harmony import */ var _app_shared_service_geo_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/service/geo-location.service */ "./src/app/shared/service/geo-location.service.ts");
/* harmony import */ var _app_core_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/service */ "./src/app/core/service/index.ts");
/* harmony import */ var _app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/service/location.service */ "./src/app/shared/service/location.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/shared/service/user.service */ "./src/app/shared/service/user.service.ts");
/* harmony import */ var _assign_playing_field_and_register_dialog_assign_playing_field_and_register_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component */ "./src/app/functionalities/home/components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component.ts");
/* harmony import */ var _app_shared_service_data_sharing_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/shared/service/data-sharing.service */ "./src/app/shared/service/data-sharing.service.ts");















var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(googleService, geoLocationService, authService, toastr, mapsApiLoader, locationService, dataSharingService, userService, dialog) {
        var _this = this;
        this.googleService = googleService;
        this.geoLocationService = geoLocationService;
        this.authService = authService;
        this.toastr = toastr;
        this.mapsApiLoader = mapsApiLoader;
        this.locationService = locationService;
        this.dataSharingService = dataSharingService;
        this.userService = userService;
        this.dialog = dialog;
        this.selectedLocationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.userLocation = {
            lat: 0,
            lng: 0,
            zoom: 13
        };
        this.selectedLocation2 = {
            lat: 50.0,
            lng: 20.0,
            zoom: 13
        };
        this.customerLabel = "Tu jesteś";
        this.customerMapIcon = "assets/icons/customer-map-marker.svg";
        this.shopMapIcon = "assets/icons/shop-map-marker.svg";
        this.registeredIcon = "assets/icons/registered-map-marker.svg";
        this.ownerPfIcon = "assets/icons/owner-pf-marker.svg";
        this.playingFieldList = [];
        this.setSelectedLocation = function (location) {
            if (location) {
                _this.selectedLocation2 = {
                    lat: location.lat,
                    lng: location.lng,
                    zoom: 13
                };
                _this.findPlaces(_this.selectedLocation2.lat, _this.selectedLocation2.lng);
            }
        };
        this.handleSuccessResponse = function (response) {
            _this.playingFieldList = response;
            if (!_this.playingFieldList.length) {
                _this.toastr.info("Nie znaleziono żadnych orlików w tym miejscu!");
            }
        };
        this.handleSelectedLocationChange = function () {
            return _this.selectedLocationControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (address) {
                return _this.geoLocationService.getPositions(address);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (data) {
                return data && data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (data) {
                _this.searchedLocations = data;
            }));
        };
        this.mapsApiLoader.load().then(function () {
            _this.geoCoder = new google.maps.Geocoder();
        });
    }
    MainPageComponent.prototype.ngAfterViewInit = function () {
        this.getLoggedUser();
    };
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.subscribeUserSelectedLocation();
        this.locations = this.handleSelectedLocationChange();
        this.selectedLocation = this.userLocation;
        if (navigator) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                _this.userLocation.lng = pos.coords.longitude;
                _this.userLocation.lat = pos.coords.latitude;
                _this.userLocationClone = JSON.parse(JSON.stringify(_this.userLocation));
                _this.findPlaces(pos.coords.latitude, pos.coords.longitude);
            });
        }
    };
    MainPageComponent.prototype.markerClick = function (infoWindow) {
        if (infoWindow == this.lastSelectedInfoWindow) {
            return;
        }
        if (this.lastSelectedInfoWindow != null) {
            try {
                this.lastSelectedInfoWindow.close();
            }
            catch (_a) { } //in case if you reload your markers
        }
        this.lastSelectedInfoWindow = infoWindow;
    };
    MainPageComponent.prototype.mapReady = function (map) {
        var _this = this;
        map.addListener("dragend", function () {
            _this.findPlaces(_this.selectedLocation2.lat, _this.selectedLocation2.lng);
        });
    };
    MainPageComponent.prototype.centerChange = function (e) {
        this.selectedLocation2.lat = e.lat;
        this.selectedLocation2.lng = e.lng;
    };
    MainPageComponent.prototype.subscribeUserSelectedLocation = function () {
        return this.locationService.selectedLocation.subscribe(this.setSelectedLocation);
    };
    MainPageComponent.prototype.findPlaces = function (lat, lng) {
        this.googleService
            .getGooglePlaces(lat, lng)
            .subscribe(this.handleSuccessResponse);
    };
    MainPageComponent.prototype.setLocation = function ($event) {
        var location = $event.option.value;
        var index = this.searchedLocations.findIndex(function (elem) { return elem.formatted_address === location; });
        if (index !== -1) {
            var loc = this.searchedLocations[index];
            var selectedLocation = {
                lat: loc.geometry.location.lat(),
                lng: loc.geometry.location.lng(),
                zoom: 13
            };
            this.locationService.setSelectedLocation(selectedLocation);
            this.userLocation = selectedLocation;
            //this.selectedLocation = selectedLocation;
        }
    };
    MainPageComponent.prototype.getIcon = function (pf) {
        if (pf.userDto && this.loggedUser) {
            if (pf.userDto.id === this.loggedUser.id) {
                return this.ownerPfIcon;
            }
        }
        if (pf.registered === true && pf.active) {
            return this.registeredIcon;
        }
        else {
            return this.shopMapIcon;
        }
    };
    MainPageComponent.prototype.getMarkerLabel = function (name) {
        return {
            color: "red",
            text: name
        };
    };
    MainPageComponent.prototype.assignPFAndRegisterDialog = function (pf) {
        this.dialog.open(_assign_playing_field_and_register_dialog_assign_playing_field_and_register_dialog_component__WEBPACK_IMPORTED_MODULE_13__["AssignPlayingFieldAndRegisterDialogComponent"], {
            width: "350px",
            data: { playingField: pf }
        });
    };
    MainPageComponent.prototype.isLogged = function () {
        return this.authService.isLogged();
    };
    MainPageComponent.prototype.getLoggedUser = function () {
        var _this = this;
        this.dataSharingService.currentLoggedUser.subscribe(function (val) {
            return _this.loggedUser = val;
        });
    };
    MainPageComponent.prototype.resetLocation = function () {
        this.userLocation = this.userLocationClone;
        this.findPlaces(this.userLocation.lat, this.userLocation.lng);
    };
    MainPageComponent.prototype.isPFOwner = function (pf) {
        if (pf.registered) {
            if (!pf.userDto || !pf.userDto.id || !this.loggedUser) {
                return false;
            }
            return pf.userDto.id === this.loggedUser.id;
        }
        else
            return false;
    };
    MainPageComponent.ctorParameters = function () { return [
        { type: _app_shared_service_google_service__WEBPACK_IMPORTED_MODULE_5__["GoogleService"] },
        { type: _app_shared_service_geo_location_service__WEBPACK_IMPORTED_MODULE_6__["GeoLocationService"] },
        { type: _app_core_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"] },
        { type: _app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"] },
        { type: _app_shared_service_data_sharing_service__WEBPACK_IMPORTED_MODULE_14__["DataSharingService"] },
        { type: _app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"])
    ], MainPageComponent.prototype, "map", void 0);
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-main-page",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/functionalities/home/components/main-page/main-page.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.scss */ "./src/app/functionalities/home/components/main-page/main-page.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_shared_service_google_service__WEBPACK_IMPORTED_MODULE_5__["GoogleService"],
            _app_shared_service_geo_location_service__WEBPACK_IMPORTED_MODULE_6__["GeoLocationService"],
            _app_core_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"],
            _app_shared_service_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"],
            _app_shared_service_data_sharing_service__WEBPACK_IMPORTED_MODULE_14__["DataSharingService"],
            _app_shared_service_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/functionalities/home/home-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/functionalities/home/home-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/functionalities/home/components/main-page/main-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/functionalities/home/home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/functionalities/home/home.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/functionalities/home/components/main-page/main-page.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/functionalities/home/home-routing.module.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _app_shared_service_google_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/service/google.service */ "./src/app/shared/service/google.service.ts");
/* harmony import */ var _app_shared_service_geo_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/service/geo-location.service */ "./src/app/shared/service/geo-location.service.ts");
/* harmony import */ var _components_assign_playing_field_and_register_dialog_assign_playing_field_and_register_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component */ "./src/app/functionalities/home/components/assign-playing-field-and-register-dialog/assign-playing-field-and-register-dialog.component.ts");









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
                _components_assign_playing_field_and_register_dialog_assign_playing_field_and_register_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AssignPlayingFieldAndRegisterDialogComponent"],
            ],
            imports: [
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyC7Iy1oeCLfim7-B5c_Aro6pTr_oFifBGM'
                })
            ],
            providers: [
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsAPIWrapper"],
                _app_shared_service_geo_location_service__WEBPACK_IMPORTED_MODULE_7__["GeoLocationService"],
                _app_shared_service_google_service__WEBPACK_IMPORTED_MODULE_6__["GoogleService"]
            ],
            entryComponents: [
                _components_assign_playing_field_and_register_dialog_assign_playing_field_and_register_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AssignPlayingFieldAndRegisterDialogComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-home-home-module.js.map