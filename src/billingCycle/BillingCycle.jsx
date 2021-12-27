import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from "../common/template/ContentHeader"
import Content from "../common/template/Content"
import Tabs from '../common/tab/Tabs'
import TabsContent from '../common/tab/TabsContent'
import TabsHeader from '../common/tab/TabsHeader'
import TabHeader from '../common/tab/TabHeader'
import TabContent from "../common/tab/TabContent"
import BillingCycleList from "./BillingCycleList";
import BillingCycleForm from "./BillingCycleForm";
import { selectTab, showTabs } from "../common/tab/tabActions"
import { create, update, remove } from './billingCycleActions'

class BillingCycle extends Component{

    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render(){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon="bars" target='tabList' />
                            <TabHeader label='Incluir' icon="plus" target='tabCreate' />
                            <TabHeader label='Alterar' icon="pencil" target='tabUpdate' />
                            <TabHeader label='Excluir' icon="trash-o" target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <BillingCycleForm onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <BillingCycleForm onSubmit={this.props.update} />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <BillingCycleForm onSubmit={this.props.remove} readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update, remove}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)