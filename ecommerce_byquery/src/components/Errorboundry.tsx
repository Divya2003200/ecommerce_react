import React, { Component } from 'react';

interface Props {
<<<<<<< HEAD
  children: React.ReactNode; // Or the specific type of children expected
=======
  children: React.ReactNode;  
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
<<<<<<< HEAD
    // Update state so the next render will show the fallback UI.
=======
   
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
<<<<<<< HEAD
    // You can log the error to an error reporting service here
=======
     
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
      // You can render any custom fallback UI
=======
   
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;

