import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  info: Error | null;
}

export class PokemonListErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, info: null };
  }

  static getDerivedStateFromError(error: Error) {
    console.log('getDerivedStateFromError :: ', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('DID_CATCH_ERROR :: ', error);
    console.log('DID_CATCH_ERROR_INFO :: ', errorInfo);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
