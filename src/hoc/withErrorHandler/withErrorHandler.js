import React,{ Component } from 'react'

import Modal from '../../components/UI/Modal/modal'
import Aux from '../Aux'

const withErrorHandler = (WrappedComponent,interceptors) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount(){
            interceptors.request.use(req => {
                this.setState({error:null})
                return req
            })
            interceptors.response.use(null,err => {
                this.setState({error:err})
            })
        }

        modalClosedHandler = () => {
            this.setState({error:null})
        }

        render() {
            return (
                <Aux>
                    <Modal modalClosed={this.modalClosedHandler} 
                        show={this.state.error}>
                        {this.state.error? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler