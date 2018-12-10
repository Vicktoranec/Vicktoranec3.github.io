webpackJsonp([0,6],{

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__productTable_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__productEditor_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orderTable_component__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
    { path: "auth", component: __WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */] },
    {
        path: "main", component: __WEBPACK_IMPORTED_MODULE_5__user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: "products/:mode/:id", component: __WEBPACK_IMPORTED_MODULE_8__productEditor_component__["a" /* ProductEditorComponent */] },
            { path: "products/:mode", component: __WEBPACK_IMPORTED_MODULE_8__productEditor_component__["a" /* ProductEditorComponent */] },
            { path: "products", component: __WEBPACK_IMPORTED_MODULE_7__productTable_component__["a" /* ProductTableComponent */] },
            { path: "orders", component: __WEBPACK_IMPORTED_MODULE_9__orderTable_component__["a" /* OrderTableComponent */] },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], routing],
        providers: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_5__user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__productTable_component__["a" /* ProductTableComponent */], __WEBPACK_IMPORTED_MODULE_8__productEditor_component__["a" /* ProductEditorComponent */], __WEBPACK_IMPORTED_MODULE_9__orderTable_component__["a" /* OrderTableComponent */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_auth_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = (function () {
    function AuthComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthComponent.prototype.authenticate = function (form) {
        var _this = this;
        if (form.valid) {
            this.auth.authenticate(this.username, this.password)
                .subscribe(function (response) {
                if (response) {
                    _this.router.navigateByUrl("/user/main/orders");
                }
                _this.errorMessage = "Ошибка аутентификации";
            });
        }
        else {
            this.errorMessage = "Форма данных неверна";
        }
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__(242)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthComponent);

var _a, _b;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_auth_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.auth.authenticated) {
            this.router.navigateByUrl("/user/auth");
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_order_repository__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderTableComponent = (function () {
    function OrderTableComponent(repository) {
        this.repository = repository;
        this.includeShipped = false;
    }
    OrderTableComponent.prototype.getOrders = function () {
        var _this = this;
        return this.repository.getOrders()
            .filter(function (o) { return _this.includeShipped || !o.shipped; });
    };
    OrderTableComponent.prototype.markShipped = function (order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    };
    OrderTableComponent.prototype.delete = function (id) {
        this.repository.deleteOrder(id);
    };
    return OrderTableComponent;
}());
OrderTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__(243)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_order_repository__["a" /* OrderRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_order_repository__["a" /* OrderRepository */]) === "function" && _a || Object])
], OrderTableComponent);

var _a;
//# sourceMappingURL=orderTable.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_product_model__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_product_repository__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditorComponent = (function () {
    function ProductEditorComponent(repository, router, activeRoute) {
        this.repository = repository;
        this.router = router;
        this.editing = false;
        this.product = new __WEBPACK_IMPORTED_MODULE_2__model_product_model__["a" /* Product */]();
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params["id"]));
        }
    }
    ProductEditorComponent.prototype.save = function (form) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/user/main/products");
    };
    return ProductEditorComponent;
}());
ProductEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__(244)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__model_product_repository__["a" /* ProductRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model_product_repository__["a" /* ProductRepository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ProductEditorComponent);

var _a, _b, _c;
//# sourceMappingURL=productEditor.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product_repository__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductTableComponent = (function () {
    function ProductTableComponent(repository) {
        this.repository = repository;
    }
    ProductTableComponent.prototype.getProducts = function () {
        return this.repository.getProducts();
    };
    ProductTableComponent.prototype.deleteProduct = function (id) {
        this.repository.deleteProduct(id);
    };
    return ProductTableComponent;
}());
ProductTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__(245)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_product_repository__["a" /* ProductRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_product_repository__["a" /* ProductRepository */]) === "function" && _a || Object])
], ProductTableComponent);

var _a;
//# sourceMappingURL=productTable.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_auth_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UserComponent.prototype.logout = function () {
        this.auth.clear();
        this.router.navigateByUrl("/");
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__(246)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n<div class=\"inner-header\">\r\n\t\t<div class=\"inner-header-1\">\r\n\t\t\t<a class=\"homebutton\"><img src=\"src/images/QUV0dNzu4c0.jpg\" height=\"40px\"></a>\r\n\t\t</div>\r\n\t\t<div class=\"inner-header-2 text-3\"><span>Технологии и гаджеты | Новинки</span></div>\r\n\t\t<div class=\"inner-header-3\">\t\t\t\r\n\t\t</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"bg-danger m-t-1 p-a-1 text-xs-center\"\r\n*ngIf=\"errorMessage != null\">\r\n{{errorMessage}}\r\n</div>\r\n\r\n<div class=\"p-a-1\">\r\n\t<form novalidate #form=\"ngForm\" (ngSubmit)=\"authenticate(form)\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Логин</label>\r\n\t\t\t<input class=\"form-control\" name=\"username\"\r\n\t\t\t[(ngModel)]=\"username\" required />\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Пароль</label>\r\n\t\t\t<input class=\"form-control\" type=\"password\" name=\"password\"\r\n\t\t\t[(ngModel)]=\"password\" required />\r\n\t\t</div>\r\n\t\t<div class=\"text-xs-center\">\r\n\t\t\t<button class=\"stylebutton-2 btn btn-secondary\" routerLink=\"/\">Назад</button>\r\n\t\t\t<button class=\"stylebutton-2 btn btn-primary\" type=\"submit\">Войти</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<div class=\"inner-content-2\">\r\n\t\t<div class=\"card-text p-a-1\">\r\n\t\t\t<table class=\"table table-sm\">\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngIf=\"getOrders().length == 0\">\r\n\t\t\t\t\t\t<td colspan=\"5\">Хранилище пустое</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<ng-template ngFor let-o [ngForOf]=\"getOrders()\">\r\n\t\t\t\t\t<tr> \r\n\t\t\t\t\t\t<td>\t\t\t\t\r\n\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"delete(o.id)\">\r\n\t\t\t\t\t\tУдалить\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr *ngFor=\"let line of o.cart.lines\">\r\n\t\t\t\t\t\t<td colspan=\"2\"></td>\r\n\t\t\t\t\t\t<td>{{line.product.name}}</td>\r\n\t\t\t\t\t\t<td>{{line.product.description}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary p-a-1\" [class.bg-warning]=\"editing\">\r\n<h5>{{editing ? \"Edit\" : \"Create\"}} Product</h5>\r\n</div>\r\n<form novalidate #form=\"ngForm\" (ngSubmit)=\"save(form)\" >\r\n<div class=\"form-group\">\r\n<label>Name</label>\r\n<input class=\"form-control\" name=\"name\" [(ngModel)]=\"product.name\" />\r\n</div>\r\n<div class=\"form-group\">\r\n<label>Category</label>\r\n<input class=\"form-control\" name=\"category\" [(ngModel)]=\"product.\r\ncategory\" />\r\n</div>\r\n<div class=\"form-group\">\r\n<label>Description</label>\r\n<textarea class=\"form-control\" name=\"description\"\r\n[(ngModel)]=\"product.description\">\r\n</textarea>\r\n</div>\r\n<div class=\"form-group\">\r\n<label>Price</label>\r\n<input class=\"form-control\" name=\"price\" [(ngModel)]=\"product.price\" />\r\n</div>\r\n<button type=\"submit\" class=\"btn btn-primary\" [class.btn-warning]=\"editing\">\r\n{{editing ? \"Save\" : \"Create\"}}\r\n</button>\r\n<button type=\"reset\" class=\"btn btn-secondary\" routerLink=\"/user/main/\r\nproducts\">\r\nCancel\r\n</button>\r\n</form>"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm table-striped\">\r\n<thead>\r\n<tr>\r\n<th>ID</th><th>Name</th><th>Category</th><th>Price</th>\r\n<th></th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n<tr *ngFor=\"let p of getProducts()\">\r\n<td>{{p.id}}</td>\r\n<td>{{p.name}}</td>\r\n<td>{{p.category}}</td>\r\n<td>{{p.price | currency:\"USD\":true:\"2.2-2\"}}</td>\r\n<td>\r\n<button class=\"btn btn-sm btn-warning\"\r\n[routerLink]=\"['/user/main/products/edit', p.id]\">\r\nEdit\r\n</button>\r\n<button class=\"btn btn-sm btn-danger\" (click)=\"deleteProduct(p.id)\">\r\nDelete\r\n</button>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<button class=\"btn btn-primary\" routerLink=\"/user/main/products/create\">\r\nCreate New Product\r\n</button>"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n<div class=\"inner-header\">\r\n\t\t<div class=\"inner-header-1\">\r\n\t\t\t<a class=\"homebutton\"><img src=\"src/images/QUV0dNzu4c0.jpg\" height=\"40px\"></a>\r\n\t\t</div>\r\n\t\t<div class=\"inner-header-2 text-3\"><span>Технологии и гаджеты | Новинки</span></div>\r\n\t\t<div class=\"inner-header-3\">\r\n\t\t\t<button class=\"stylebutton-2 btn-block btn-sm\" (click)=\"logout()\">\r\n\t\t\tВыход\r\n\t\t\t</button>\r\n\t\t</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row bluepage\">\r\n\r\n<div class=\"navigation\">\r\n<div class=\"inner-navigation\">\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n<div class=\"inner-content\">\r\n\t<div class=\"inner-content-1\">\r\n\t\t<ul class=\"hornav\">\r\n\t\t\t<li><a class=\"letter-1\" routerLink=\"/store\">Главная</a></li>\t\r\n\t\t\t<li><a class=\"letter-1\">Хранилище</a></li>\t\t\t\r\n\t\t</ul>\r\n\t</div>\r\n\t<div>\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\t\r\n</div>\r\n</div>\r\n\r\n<div class=\"sidebar\">\r\n<div class=\"inner-sidebar\">\r\n\t\r\n</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row bluepage\">\r\n \r\n<div class=\"footer\">\r\n\t<div class=\"inner-footer\">\r\n\t\tПодвал сайта\r\n\t</div>\r\n</div> \r\n\r\n</div>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map