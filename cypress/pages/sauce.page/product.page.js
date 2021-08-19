import Base from '../_base.page'

const Produto = {

    BTN_SELEC_PROD_1  : '[id="item_4_title_link"]',
    BTN_ADD_CART_1    : '[data-test="add-to-cart-sauce-labs-backpack"]',
    BTN_SELEC_PROD_2  : '#item_0_title_link > .inventory_item_name',
    BTN_ADD_CART_2    : '#add-to-cart-sauce-labs-bike-light',
    QDT_PROD_CART     : '#shopping_cart_container > a > span',
    BTN_BACK_2_PRODS  : '[data-test=back-to-products]'

}

export class Product_page extends Base {

    static selecionar_produto(testCase){
        
        switch(testCase){        

            case 'apenas 1 produto': 
                cy.get(Produto.BTN_SELEC_PROD_1).click()
                cy.get(Produto.BTN_ADD_CART_1).click()
                cy.get(Produto.BTN_BACK_2_PRODS).click()
                break

            case 'mais de 1 produto': 
                cy.get(Produto.BTN_SELEC_PROD_1).click()
                cy.get(Produto.BTN_ADD_CART_1).click()
                cy.get(Produto.BTN_BACK_2_PRODS).click()
                cy.get(Produto.BTN_SELEC_PROD_2).click()
                cy.get(Produto.BTN_ADD_CART_2).click()
                cy.get(Produto.BTN_BACK_2_PRODS).click()
                break

        }

    }

    static validar_cart_icon(iconeCarrinho, prodQuantidade){

        if (!iconeCarrinho){
            cy.get(Produto.QDT_PROD_CART).should('not.exist')
        } else {
            cy.get(Produto.QDT_PROD_CART).should('contain.text', prodQuantidade)
        }
                
    }

}