'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">canteen-fe documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-fad1e01e4a0d5da210d7dd9747c57cf29d17bd6acda30c32812c03b6c822964531607f2c96e41feb194df355ac7c2b4b4d18be1dd1d3ecaa51e870098657c77d"' : 'data-target="#xs-components-links-module-AppModule-fad1e01e4a0d5da210d7dd9747c57cf29d17bd6acda30c32812c03b6c822964531607f2c96e41feb194df355ac7c2b4b4d18be1dd1d3ecaa51e870098657c77d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fad1e01e4a0d5da210d7dd9747c57cf29d17bd6acda30c32812c03b6c822964531607f2c96e41feb194df355ac7c2b4b4d18be1dd1d3ecaa51e870098657c77d"' :
                                            'id="xs-components-links-module-AppModule-fad1e01e4a0d5da210d7dd9747c57cf29d17bd6acda30c32812c03b6c822964531607f2c96e41feb194df355ac7c2b4b4d18be1dd1d3ecaa51e870098657c77d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-699246d152cb21b65cdaff641695a391096f3caa69e87a29f8e23ab4ad890b408503ad7f74c7ee27dfb33bb05d53cf4a6e69f32b8c6c906304624d4cc36f2be5"' : 'data-target="#xs-components-links-module-DashboardModule-699246d152cb21b65cdaff641695a391096f3caa69e87a29f8e23ab4ad890b408503ad7f74c7ee27dfb33bb05d53cf4a6e69f32b8c6c906304624d4cc36f2be5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-699246d152cb21b65cdaff641695a391096f3caa69e87a29f8e23ab4ad890b408503ad7f74c7ee27dfb33bb05d53cf4a6e69f32b8c6c906304624d4cc36f2be5"' :
                                            'id="xs-components-links-module-DashboardModule-699246d152cb21b65cdaff641695a391096f3caa69e87a29f8e23ab4ad890b408503ad7f74c7ee27dfb33bb05d53cf4a6e69f32b8c6c906304624d4cc36f2be5"' }>
                                            <li class="link">
                                                <a href="components/ChartCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FoodCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FoodSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodSectionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c7e936ff206e77d256318ce41229ff84f2b0272d36d0edccd0e076c048fdafd75e9e2e065bae22d2a33583d745947ec9dee285f30dcfb4ee1ee2b6f40b5c4487"' : 'data-target="#xs-components-links-module-SharedModule-c7e936ff206e77d256318ce41229ff84f2b0272d36d0edccd0e076c048fdafd75e9e2e065bae22d2a33583d745947ec9dee285f30dcfb4ee1ee2b6f40b5c4487"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c7e936ff206e77d256318ce41229ff84f2b0272d36d0edccd0e076c048fdafd75e9e2e065bae22d2a33583d745947ec9dee285f30dcfb4ee1ee2b6f40b5c4487"' :
                                            'id="xs-components-links-module-SharedModule-c7e936ff206e77d256318ce41229ff84f2b0272d36d0edccd0e076c048fdafd75e9e2e065bae22d2a33583d745947ec9dee285f30dcfb4ee1ee2b6f40b5c4487"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabsContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-ba3492d4a2cecb2c1579179586a66dd89cad4309ecda998825f0db02376abfed00bbcbac893f076063e65056b4892b22a2835cfc6729ec503fa980f4f50f8c48"' : 'data-target="#xs-components-links-module-UserModule-ba3492d4a2cecb2c1579179586a66dd89cad4309ecda998825f0db02376abfed00bbcbac893f076063e65056b4892b22a2835cfc6729ec503fa980f4f50f8c48"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-ba3492d4a2cecb2c1579179586a66dd89cad4309ecda998825f0db02376abfed00bbcbac893f076063e65056b4892b22a2835cfc6729ec503fa980f4f50f8c48"' :
                                            'id="xs-components-links-module-UserModule-ba3492d4a2cecb2c1579179586a66dd89cad4309ecda998825f0db02376abfed00bbcbac893f076063e65056b4892b22a2835cfc6729ec503fa980f4f50f8c48"' }>
                                            <li class="link">
                                                <a href="components/AuthModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FoodService.html" data-type="entity-link" >FoodService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidebarService.html" data-type="entity-link" >SidebarService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IFoodCard.html" data-type="entity-link" >IFoodCard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFoodItem.html" data-type="entity-link" >IFoodItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});