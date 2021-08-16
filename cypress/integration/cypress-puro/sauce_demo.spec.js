/// <reference types="cypress"/>
 
import {Sauce_login} from '../../pages/sauce.page/sauce.login'
import {Sauce_add_carrinho} from '../../pages/sauce.page/sauce.addCarrinho'
import {Sauce_cont_carrinho} from '../../pages/sauce.page/sauce.contCarrinho'
import {Sauce_validar_carrinho} from '../../pages/sauce.page/sauce.validarCarrinho'

describe('Adicionar produtos ao carrrinho', () => {
    context('Dado que esteja na página de login', () => {
        it('acessar pagina', () => {   
            cy.visit('www.saucedemo.com')             
        })
        context('E que esteja logado com usuario "standard_user" e senha "secret_sauce"', () => {
            it('logar com usuario valido', () => { 
                Sauce_login.logar_sauce_demo('standard_user', 'secret_sauce')
                Sauce_add_carrinho.adicionar_carrinho_sauce_demo('Sauce Labs Backpack')
                Sauce_cont_carrinho.cont_carrinho_sauce_demo()
                Sauce_validar_carrinho.validar_carrinho_sauce_demo() 
            })
            specify('Quando adicionar produtos ao carrinho "Sauce Labs Backpack"', () => {
                it('adicionar produto ao carrinho', () => {
                    Sauce_add_carrinho.adicionar_carrinho_sauce_demo('Sauce Labs Backpack')
                })
                it('Então a quantidade de itens no carrinho deve aumentar', () => {   
                    Sauce_cont_carrinho.cont_carrinho_sauce_demo()                 
                })
                it('E os produtos devem ser adicionados ao carrinho', () => {
                    Sauce_validar_carrinho.validar_carrinho_sauce_demo()                    
                })
            })
        })
    })
})