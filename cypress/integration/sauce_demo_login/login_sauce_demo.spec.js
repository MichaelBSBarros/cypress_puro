/// <reference types="cypress"/>

import {Login_page} from '../../pages/sauce.page/login.page'

describe('Logar no Sauce Demo', () => {
    context('Dado que esteja na pagina inicial do Sauce demo', () => {
        beforeEach(() => {
        Login_page.acessar_pagina()
        })

        const data = require('../../fixtures/loginData.json')

        data.forEach(item => {
            context(`Quando inserir os dados de login ${item.tipo}`, () => {
                beforeEach(() => {
                    Login_page.inserir_dados_login(item)
                })
                it(`Então deverá ser exibida a ${item.retorno}${item.message}`, () => {
                    Login_page.validar_retorno_login(item)
                })
            })
        })

    })
})