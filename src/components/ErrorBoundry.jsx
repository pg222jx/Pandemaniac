/**
 * Errorboundry.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */

import React from 'react'

// Code inspiration  from Reacts Documentation https://reactjs.org/docs/error-boundaries.html

export class ErrorBoundary extends React.Component {
  /**
   * Constructor inheriting from React.component.
   *
   */
    constructor(props) {
      super(props)
      this.state = { hasError: false, error: null }
    }
  
  /**
   * Lifecycle method to render a fallback UI after an error has been thrown.
   * @returns {object} if error has been thrown.
   */
    static getDerivedStateFromError(error) {    
        return { hasError: true, error }
      }

  /**
   * Logs error information.
   */
    componentDidCatch(error, errorInfo) {    
        console.log(error, errorInfo)
      }

    render() {
      if (this.state.hasError) {      
          return <h1>Something went wrong. {this.state.error.message}</h1>
        }
      return this.props.children
    }
}
