class CustomElementWrapper extends HTMLElement {
    constructor(){
        super();
        this.observer = new MutationObserver(()=>this.update());
        this.observer.observe(this,{attributes: true});
    }
    connectedCallback(){
        this.mount();
    }
    disconnectedCallback(){
        this.unmount();
    }
    update(){
        this.unmount();
        this.mount();
    }
    mount(){
        this.getPropsFromAttrs(this.attributes);
        ReactDOM.render(<PosterWidget {...this.getPropsFromAttrs(this.attributes)}/>, this);
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(this);
    }
    getPropsFromAttrs(attr){
        let props = {};
        [...attr].forEach((a)=>{
            props[a.name] = a.value
        })
        return props;
    }

}
customElements.define('poster-widget-react', CustomElementWrapper)