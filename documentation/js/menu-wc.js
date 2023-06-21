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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminDashboardModule.html" data-type="entity-link" >AdminDashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminDashboardModule-b3cb4137600f85d86342302feb5784825edecbd9a0209f9fbd26d893ce2666e722e5fb7e9819376a81b847b540a096a61b2f6c5f25020c1935fa5b4f9f471abf"' : 'data-bs-target="#xs-components-links-module-AdminDashboardModule-b3cb4137600f85d86342302feb5784825edecbd9a0209f9fbd26d893ce2666e722e5fb7e9819376a81b847b540a096a61b2f6c5f25020c1935fa5b4f9f471abf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminDashboardModule-b3cb4137600f85d86342302feb5784825edecbd9a0209f9fbd26d893ce2666e722e5fb7e9819376a81b847b540a096a61b2f6c5f25020c1935fa5b4f9f471abf"' :
                                            'id="xs-components-links-module-AdminDashboardModule-b3cb4137600f85d86342302feb5784825edecbd9a0209f9fbd26d893ce2666e722e5fb7e9819376a81b847b540a096a61b2f6c5f25020c1935fa5b4f9f471abf"' }>
                                            <li class="link">
                                                <a href="components/AddFoodComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddFoodComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteFoodComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteFoodComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FoodInventoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodInventoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateFoodComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateFoodComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminDashboardRoutingModule.html" data-type="entity-link" >AdminDashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-09c0dcd3676f77e95883648718e82a06e9c83a927cec539fc05d9d2b40df369b0253a2ba36828ef9413e20c44906255a28d785e1d092c25ba19ef646d0d02153"' : 'data-bs-target="#xs-components-links-module-AppModule-09c0dcd3676f77e95883648718e82a06e9c83a927cec539fc05d9d2b40df369b0253a2ba36828ef9413e20c44906255a28d785e1d092c25ba19ef646d0d02153"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-09c0dcd3676f77e95883648718e82a06e9c83a927cec539fc05d9d2b40df369b0253a2ba36828ef9413e20c44906255a28d785e1d092c25ba19ef646d0d02153"' :
                                            'id="xs-components-links-module-AppModule-09c0dcd3676f77e95883648718e82a06e9c83a927cec539fc05d9d2b40df369b0253a2ba36828ef9413e20c44906255a28d785e1d092c25ba19ef646d0d02153"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedbackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedbackHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedbackHistoryComponent</a>
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
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DashboardModule-388a4b637137e63a02d6b768be14bbb918b7077a3ab8ee2efc670793e9dcd4f5a45bc10f1c867ea81d9bb8e4250ce058349e44463a9836d3002e78642cca2922"' : 'data-bs-target="#xs-components-links-module-DashboardModule-388a4b637137e63a02d6b768be14bbb918b7077a3ab8ee2efc670793e9dcd4f5a45bc10f1c867ea81d9bb8e4250ce058349e44463a9836d3002e78642cca2922"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-388a4b637137e63a02d6b768be14bbb918b7077a3ab8ee2efc670793e9dcd4f5a45bc10f1c867ea81d9bb8e4250ce058349e44463a9836d3002e78642cca2922"' :
                                            'id="xs-components-links-module-DashboardModule-388a4b637137e63a02d6b768be14bbb918b7077a3ab8ee2efc670793e9dcd4f5a45bc10f1c867ea81d9bb8e4250ce058349e44463a9836d3002e78642cca2922"' }>
                                            <li class="link">
                                                <a href="components/ChartCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DayToggleButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DayToggleButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FoodCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FoodPostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodPostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FoodSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-c294382be15596853f803da94bf50e6a259e4ddff50b3a8bb99bf94eb2a58e4720c569f2be6a126e4deeede667daa3b535041fe0419e981dd01f9fe521edd6d5"' : 'data-bs-target="#xs-components-links-module-SharedModule-c294382be15596853f803da94bf50e6a259e4ddff50b3a8bb99bf94eb2a58e4720c569f2be6a126e4deeede667daa3b535041fe0419e981dd01f9fe521edd6d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c294382be15596853f803da94bf50e6a259e4ddff50b3a8bb99bf94eb2a58e4720c569f2be6a126e4deeede667daa3b535041fe0419e981dd01f9fe521edd6d5"' :
                                            'id="xs-components-links-module-SharedModule-c294382be15596853f803da94bf50e6a259e4ddff50b3a8bb99bf94eb2a58e4720c569f2be6a126e4deeede667daa3b535041fe0419e981dd01f9fe521edd6d5"' }>
                                            <li class="link">
                                                <a href="components/AccordionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccordionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddNewItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddNewItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddNewMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddNewMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
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
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-50aa715e6520987a3880a9bb35946248ae06a84d1e67cdd47df4daef3be2abac85815ff0306096cdd085ee2a9ede0afe5877efacc8d12dd5319aab8d4678b141"' : 'data-bs-target="#xs-components-links-module-UserModule-50aa715e6520987a3880a9bb35946248ae06a84d1e67cdd47df4daef3be2abac85815ff0306096cdd085ee2a9ede0afe5877efacc8d12dd5319aab8d4678b141"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-50aa715e6520987a3880a9bb35946248ae06a84d1e67cdd47df4daef3be2abac85815ff0306096cdd085ee2a9ede0afe5877efacc8d12dd5319aab8d4678b141"' :
                                            'id="xs-components-links-module-UserModule-50aa715e6520987a3880a9bb35946248ae06a84d1e67cdd47df4daef3be2abac85815ff0306096cdd085ee2a9ede0afe5877efacc8d12dd5319aab8d4678b141"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InviteFriendComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InviteFriendComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PleaseLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PleaseLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTabComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddItemButtonComponent.html" data-type="entity-link" >AddItemButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BackButtonComponent.html" data-type="entity-link" >BackButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LeftArrowButtonComponent.html" data-type="entity-link" >LeftArrowButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotFoundComponent.html" data-type="entity-link" >NotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResetPasswordComponent.html" data-type="entity-link" >ResetPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RightArrowButtonComponent.html" data-type="entity-link" >RightArrowButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ServerErrorComponent.html" data-type="entity-link" >ServerErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TestErrorComponent.html" data-type="entity-link" >TestErrorComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FoodInventoryServiceService.html" data-type="entity-link" >FoodInventoryServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FoodService.html" data-type="entity-link" >FoodService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FooterService.html" data-type="entity-link" >FooterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PeopleCountService.html" data-type="entity-link" >PeopleCountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidebarService.html" data-type="entity-link" >SidebarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/InterceptorInterceptor.html" data-type="entity-link" >InterceptorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IsAdminGuard.html" data-type="entity-link" >IsAdminGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICurrentUser.html" data-type="entity-link" >ICurrentUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFoodCard.html" data-type="entity-link" >IFoodCard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFoodInventory.html" data-type="entity-link" >IFoodInventory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFoodItem.html" data-type="entity-link" >IFoodItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRegister.html" data-type="entity-link" >IRegister</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/TimePipe.html" data-type="entity-link" >TimePipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});