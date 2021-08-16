import Base from '../_base.page'
import Factory from '../../fixtures/factory'

export class Sauce_login_massas extends Base {

    static buscarTipo(tipo){
        
        var user = Factory.usuario(tipo)
        console.log(user)

        return user
    }
    
}