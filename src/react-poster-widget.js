class PosterWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { img: '*' }
    }
    // ######### Update OMDB API_KEY value here #######
    api_key = '<API_KEY_VALUE>';
    
    api_url = `http://www.omdbapi.com/?apikey=${this.api_key}&t=`;
    componentDidMount() {
        
        if (this.api_key && this.props.title) {
            fetch(this.api_url + this.props.title).then(res => res.json()).then((res) => {
                this.setState({ img: res.Poster })
            }).catch(err => console.error(err));
        }
    }
    render() {
        const divStyle = {
            width: '100%',
            height: '100%',
            padding: '0%',
            boxSizing: 'border-box'
        }
        const imgStyle = {
            width: '100%',
            height: '100%',
            border:'10px solid #61dafb',
            borderRadius: '5px'
        }
        if (this.api_key) {
            return (
                <React.Fragment>
                    <div style={divStyle}>
                        <img style={imgStyle} src={this.state.img} />
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <div>
                    The component OMDB Api key to fetch resources.
                    Please update <strong>api_key</strong> in the React component source.<br />
                    Refer <a target="_blank" href="http://www.omdbapi.com/">OMDB API</a> to get the key
                </div>
            )
        }

    }
}
