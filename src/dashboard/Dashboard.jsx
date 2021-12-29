import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import ValueBox from "../common/widget/ValueBox";
import Row from "../common/layout/Row";

class Dashboard extends Component {

    componentWillMount(){
        this.props.getSummary()
    }

    render(){
        
        const { credit, debt } = this.props.summary
        const result = (credit - debt)

        return(
            <div>
                <ContentHeader title="dashboard" small='versão 1.0' />
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

//pega os dados do state global e coloca no prop 'summary'
const mapStateToProps = state => ({summary: state.dashboard.summary})

//liga a action creator com os reducers
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

//passa os props com os dados pra classe
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)