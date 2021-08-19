import { Sauce_checkout } from '../../pages/sauce.page/sauce.checkout'
/// <reference types="cypress"/>
import {Sauce_login} from '../../pages/sauce.page/sauce.login'

describe('login', () => {

    const data = require('../../fixtures/loginData.json')

    data.forEach(item => {
        it(`deve realizar login com usuario tipo ${item.tipo}`, () => {
            Sauce_login.acessar_sauce_demo()
            Sauce_login.inform_user_name(item.username)
            Sauce_login.inform_user_password(item.password)
            Sauce_login.click_login()
        })
    })

})