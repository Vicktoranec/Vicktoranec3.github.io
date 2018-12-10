webpackJsonp([1,6],{

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__productTable_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__productEditor_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orderTable_component__ = __webpack_require__(228);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
    { path: "auth", component: __WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */] },
    {
        path: "main", component: __WEBPACK_IMPORTED_MODULE_5__admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]],
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
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], routing],
        providers: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_5__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_7__productTable_component__["a" /* ProductTableComponent */], __WEBPACK_IMPORTED_MODULE_8__productEditor_component__["a" /* ProductEditorComponent */], __WEBPACK_IMPORTED_MODULE_9__orderTable_component__["a" /* OrderTableComponent */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_auth_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminComponent.prototype.logout = function () {
        this.auth.clear();
        this.router.navigateByUrl("/");
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__(237)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 226:
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
                    _this.router.navigateByUrl("/admin/main/products");
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
        template: __webpack_require__(238)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthComponent);

var _a, _b;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ 227:
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
            this.router.navigateByUrl("/admin/auth");
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

/***/ 228:
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
        template: __webpack_require__(239)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_order_repository__["a" /* OrderRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_order_repository__["a" /* OrderRepository */]) === "function" && _a || Object])
], OrderTableComponent);

var _a;
//# sourceMappingURL=orderTable.component.js.map

/***/ }),

/***/ 229:
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
        this.router.navigateByUrl("/admin/main/products");
    };
    return ProductEditorComponent;
}());
ProductEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__(240)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__model_product_repository__["a" /* ProductRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model_product_repository__["a" /* ProductRepository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ProductEditorComponent);

var _a, _b, _c;
//# sourceMappingURL=productEditor.component.js.map

/***/ }),

/***/ 230:
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
        template: __webpack_require__(241)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_product_repository__["a" /* ProductRepository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_product_repository__["a" /* ProductRepository */]) === "function" && _a || Object])
], ProductTableComponent);

var _a;
//# sourceMappingURL=productTable.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n<div class=\"inner-header\">\r\n\t\t<div class=\"inner-header-1\">\r\n\t\t\t<a class=\"homebutton\"><img src=\"src/images/QUV0dNzu4c0.jpg\" height=\"40px\"></a>\r\n\t\t</div>\r\n\t\t<div class=\"inner-header-2 text-3\"><span>Технологии и гаджеты | Новинки</span></div>\r\n\t\t<div class=\"inner-header-3\">\r\n\t\t\t<button class=\"stylebutton-2 btn-block btn-sm\" (click)=\"logout()\">\r\n\t\t\tВыход\r\n\t\t\t</button>\r\n\t\t</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row bluepage\">\r\n\r\n<div class=\"navigation\">\r\n<div class=\"inner-navigation\">\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n<div class=\"inner-content\">\r\n\t<div class=\"inner-content-1\">\r\n\t\t<ul class=\"hornav\">\r\n\t\t\t<li><a class=\"letter-1\" routerLink=\"/store\">Главная</a></li>\t\r\n\t\t\t<li><a class=\"letter-1\">Управление публикациями</a></li>\t\t\t\r\n\t\t</ul>\r\n\t</div>\r\n\t<div>\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\t\r\n</div>\r\n</div>\r\n\r\n<div class=\"sidebar\">\r\n<div class=\"inner-sidebar\">\r\n\t\r\n</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row bluepage\">\r\n \r\n<div class=\"footer\">\r\n\t<div class=\"inner-footer\">\r\n\t\tПодвал сайта\r\n\t</div>\r\n</div> \r\n\r\n</div>"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n<div class=\"inner-header\">\r\n\t\t<div class=\"inner-header-1\">\r\n\t\t\t<a class=\"homebutton\"><img src=\"src/images/QUV0dNzu4c0.jpg\" height=\"40px\"></a>\r\n\t\t</div>\r\n\t\t<div class=\"inner-header-2 text-3\"><span>Технологии и гаджеты | Новинки</span></div>\r\n\t\t<div class=\"inner-header-3\">\t\t\t\r\n\t\t</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"bg-danger m-t-1 p-a-1 text-xs-center\"\r\n*ngIf=\"errorMessage != null\">\r\n{{errorMessage}}\r\n</div>\r\n\r\n<div class=\"p-a-1\">\r\n\t<form novalidate #form=\"ngForm\" (ngSubmit)=\"authenticate(form)\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Логин</label>\r\n\t\t\t<input class=\"form-control\" name=\"username\"\r\n\t\t\t[(ngModel)]=\"username\" required />\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Пароль</label>\r\n\t\t\t<input class=\"form-control\" type=\"password\" name=\"password\"\r\n\t\t\t[(ngModel)]=\"password\" required />\r\n\t\t</div>\r\n\t\t<div class=\"text-xs-center\">\r\n\t\t\t<button class=\"stylebutton-2 btn btn-secondary\" routerLink=\"/\">Назад</button>\r\n\t\t\t<button class=\"stylebutton-2 btn btn-primary\" type=\"submit\">Войти</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-check\">\r\n<label class=\"form-check-label\">\r\n<input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"includeShipped\"/>\r\nDisplay Shipped Orders\r\n</label>\r\n</div>\r\n<table class=\"table table-sm\">\r\n<thead>\r\n<tr><th>Name</th><th>Zip</th><th colspan=\"2\">Cart</th><th></th></tr>\r\n</thead>\r\n<tbody>\r\n<tr *ngIf=\"getOrders().length == 0\">\r\n<td colspan=\"5\">There are no orders</td>\r\n</tr>\r\n<ng-template ngFor let-o [ngForOf]=\"getOrders()\">\r\n<tr>\r\n<td>{{o.name}}</td><td>{{o.zip}}</td>\r\n<th>Product</th><th>Quantity</th>\r\n<td>\r\n<button class=\"btn btn-warning\" (click)=\"markShipped(o)\">\r\nShip\r\n</button>\r\n<button class=\"btn btn-danger\" (click)=\"delete(o.id)\">\r\nDelete\r\n</button>\r\n</td>\r\n</tr>\r\n<tr *ngFor=\"let line of o.cart.lines\">\r\n<td colspan=\"2\"></td>\r\n<td>{{line.product.name}}</td>\r\n<td>{{line.quantity}}</td>\r\n</tr>\r\n</ng-template>\r\n</tbody>\r\n</table>"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<div class=\"inner-content-2\">\r\n\t\t<div class=\"card-text p-a-1\">\r\n\t\t\t<div class=\"bg-primary p-a-1\" [class.bg-warning]=\"editing\">\r\n\t\t\t\t<h5 class=\"text-xs-center\">{{editing ? \"Редактировать\" : \"Создать\"}} Публикацию</h5>\r\n\t\t\t</div>\r\n\t\t\t<form novalidate #form=\"ngForm\" (ngSubmit)=\"save(form)\" >\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>Заголовок</label>\r\n\t\t\t\t\t<input class=\"form-control\" name=\"name\" [(ngModel)]=\"product.name\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>Категория</label>\r\n\t\t\t\t\t<input class=\"form-control\" name=\"category\" [(ngModel)]=\"product.\r\n\t\t\t\t\tcategory\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>Содержание</label>\r\n\t\t\t\t\t<textarea class=\"form-control\" name=\"description\"\r\n\t\t\t\t\t[(ngModel)]=\"product.description\">\r\n\t\t\t\t\t</textarea>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>Цена</label>\r\n\t\t\t\t\t<input class=\"form-control\" name=\"price\" [(ngModel)]=\"product.price\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<button type=\"submit\" class=\"stylebutton-2 btn btn-primary\" [class.btn-warning]=\"editing\">\r\n\t\t\t\t{{editing ? \"Сохранить\" : \"Создать\"}}\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type=\"reset\" class=\"stylebutton-2 btn btn-secondary\" routerLink=\"/admin/main/\r\n\t\t\t\tproducts\">\r\n\t\t\t\tОтмена\r\n\t\t\t\t</button>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<div class=\"inner-content-2\">\r\n\t\t<div class=\"card-text p-a-1\">\r\n\t\t\t<table class=\"table table-sm table-striped\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>ID</th><th>Заголовок</th><th>Категория</th><th>Цена</th>\r\n\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let p of getProducts()\">\r\n\t\t\t\t\t\t<td>{{p.id}}</td>\r\n\t\t\t\t\t\t<td>{{p.name}}</td>\r\n\t\t\t\t\t\t<td>{{p.category}}</td>\r\n\t\t\t\t\t\t<td>{{p.price | currency:\"USD\":true:\"2.2-2\"}}</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button class=\"btn btn-sm btn-warning\"\r\n\t\t\t\t\t\t[routerLink]=\"['/admin/main/products/edit', p.id]\">\r\n\t\t\t\t\t\tРедактировать\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-sm btn-danger\" (click)=\"deleteProduct(p.id)\">\r\n\t\t\t\t\t\tУдалить\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t\t<button class=\"stylebutton-2 btn btn-primary\" routerLink=\"/admin/main/products/create\">\r\n\t\t\tСоздать Новую Публикацию\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map