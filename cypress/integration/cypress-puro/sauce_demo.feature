Feature: Exemplos simples
 
    Background: Iniciar na página de exemplo
        Given que esteja na página de login
        And que esteja logado com usuario "standard_user" e senha "secret_sauce"
 
    Scenario: Adicionar produtos ao carrrinho
        When adicionar produtos ao carrinho "Sauce Labs Backpack"
        Then a quantidade de itens no carrinho deve aumentar
        And os produtos devem ser adicionados ao carrinho