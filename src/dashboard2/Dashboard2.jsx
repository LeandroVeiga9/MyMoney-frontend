import React, { Component } from "react";
import Axios from "axios";

import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import ValueBox from "../common/widget/ValueBox";
import Row from "../common/layout/Row";

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard extends Component {

    constructor(props){
        super(props)
        
        this.state = { credit: 0, debt: 0 }
    }

    componentWillMount(){
        Axios.get(`${BASE_URL}/billingCycles/summary`).then(resp => this.setState(resp.data))
    }

    render(){
        
        const { credit, debt } = this.state
        const result = (credit - debt)

        return(
            <div>
                <ContentHeader title="dashboard" small='versão 2.0' />
                <Content>
                    <Row>
                    <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${parseFloat(credit.toFixed(2))}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${parseFloat(debt.toFixed(2))}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${parseFloat(result.toFixed(2))}`} text='Valor consolidado' />
                    </Row>
                    
                </Content>
            </div>
        )
    }
}
