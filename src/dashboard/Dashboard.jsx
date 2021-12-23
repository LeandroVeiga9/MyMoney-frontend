import React, { Component } from "react";
import { connect } from "react-redux";

import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import ValueBox from "../common/widget/ValueBox";
import Row from "../common/layout/Row";

class Dashboard extends Component {
    render(){
        
        const { credit, debt } = this.props.summary

        return(
            <div>
                <ContentHeader title="dashboard" small='versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor consolidado' />
                    </Row>
                    
                </Content>
            </div>
        )
    }
}

//pega os dados do state global e coloca no prop 'summary'
const mapStateToProps = state => ({summary: state.dashboard.summary})

//passa os props com os dados pra classe
export default connect(mapStateToProps)(Dashboard)