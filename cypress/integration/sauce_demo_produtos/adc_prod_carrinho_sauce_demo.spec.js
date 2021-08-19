/// <reference types="cypress"/>

import {Login_page} from '../../pages/sauce.page/login.page'
import {Product_page} from '../../pages/sauce.page/product.page'

describe('Adicionar produtos no carrinho Sauce Demo', () => {
    context('Dado que esteja logado no Sauce Demo como usuário válido', () => {
        const data = require('../../fixtures/loginData.json')
        beforeEach(() => {
            Login_page.acessar_pagina()
            Login_page.inserir_dados_login(data[4])
            Login_page.validar_retorno_login(data[4])
        })
        context('E que não exitem produtos no carrinho', () => {
            beforeEach(() => {
                Product_page.validar_cart_icon(false)
            })
            const dataProd = require('../../fixtures/productsData.json')
            dataProd.forEach(prod => {
                context(`Quando selecionar ${prod.testCase} para o carrinho`, () => {
                    beforeEach(() => {
                        Product_page.selecionar_produto(prod.testCase)
                    })
                    it('Então a quantidade de itens no carrinho deve aumentar', () => {
                        Product_page.validar_cart_icon(true, prod.quantidade)
                    })
                })
            })
        })
    })
})



        //data.forEach(item => {
        //    context(`Quando inserir os dados de login ${item.tipo}`, () => {
        //        beforeEach(() => {
        //            Login_page.inserir_dados_login(item)
        //        })
        //        it(`Então deverá ser exibida a ${item.retorno}${item.message}`, () => {
        //            Login_page.validar_retorno_login(item)
        //        })
        //    })
        //})

