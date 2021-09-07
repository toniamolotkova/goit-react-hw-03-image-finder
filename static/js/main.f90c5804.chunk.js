(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={item:"ImageGalleryItem_item__2ey0n",image:"ImageGalleryItem_image__2xsbt"}},13:function(e,t,a){e.exports={img:"NotFoundImage_img__oc4pF",title:"NotFoundImage_title__-iCSW"}},14:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},24:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__gboaM"}},26:function(e,t,a){e.exports={button:"Button_button__3QF_k"}},32:function(e,t,a){},33:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),s=(a(32),a(4)),i=a(5),l=a(7),u=a(6),h=a(10),m=(a(33),a(34),a(9)),d=a.n(m),b=a(1),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.handleChange=function(t){e.setState({searchValue:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchValue.trim()?(e.props.onSubmit(e.state.searchValue),e.reset()):h.b.warn("Enter correct value")},e.reset=function(){e.setState({searchValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:d.a.searchbar,children:Object(b.jsxs)("form",{className:d.a.form,onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:d.a.button,children:Object(b.jsx)("span",{className:d.a.label,children:"Search"})}),Object(b.jsx)("input",{value:this.state.searchValue,onChange:this.handleChange,className:d.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),j=a(15),f=(a(36),a(24)),p=a.n(f),O=a(25),y=a.n(O),v={fetchImagesWithQuery:function(e,t){return y.a.get("".concat("https://pixabay.com/api","/?q=").concat(e,"&page=").concat(t,"&key=").concat("22352284-07c51f530b6e71a5deb2eb1e0","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){if(200===e.status&&0!==e.data.length)return e.data.hits;if(404===e.status)throw new Error(e.message||"Your query is not find")}))}},_=a(12),x=a.n(_),S=function(e){var t=e.image,a=e.descr,n=e.onOpenModal;return Object(b.jsx)("li",{className:x.a.item,onClick:n,children:Object(b.jsx)("img",{src:t,alt:a,className:x.a.image})})},w=a(26),k=a.n(w),C=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:k.a.button,onClick:t,children:"Load more"})},I=a(27),N=a.n(I),V=a(13),F=a.n(V),M=a.p+"static/media/notfound.6fed700b.jpg",E=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:M,alt:"try to find smth",className:F.a.img}),Object(b.jsx)("h2",{className:F.a.title,children:" Try to find something else"})]})},A=a(14),B=a.n(A),D=document.querySelector("#modal-root"),W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.imageInfo;return Object(o.createPortal)(Object(b.jsx)("div",{className:B.a.overlay,onClick:this.handleOverlayClick,children:Object(b.jsx)("div",{className:B.a.modal,children:Object(b.jsx)("img",{src:e.largeImageURL,alt:e.tags})})}),D)}}]),a}(n.Component),L="idle",U="pending",G="resolved",K="rejected",Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:null,page:1,error:null,status:L,modalImageInfo:null},e.handleClickBtn=function(){e.setState((function(e){return{page:e.page+1}}))},e.toggleModal=function(t){e.setState({modalImageInfo:t})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.searchValue,r=this.props.searchValue;n!==r&&(this.setState({status:U}),v.fetchImagesWithQuery(r,this.state.page).then((function(e){return a.setState({images:e,status:G})})).catch((function(e){return a.setState({error:e,status:K})}))),t.page!==this.state.page&&v.fetchImagesWithQuery(r,this.state.page).then((function(e){a.setState((function(t){return{images:[].concat(Object(j.a)(t.images),Object(j.a)(e)),status:G}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return a.setState({error:e,status:K})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.status,r=t.modalImageInfo;return"idle"===n?Object(b.jsx)("h1",{style:{color:"darkblue",textAlign:"center"},children:"Find your image!"}):"pending"===n?Object(b.jsx)(N.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):"rejected"===n?Object(b.jsx)(E,{}):"resolved"===n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ul",{className:p.a.gallery,children:a.map((function(t){return Object(b.jsx)(S,{onOpenModal:function(){return e.toggleModal(t)},image:t.webformatURL,descr:t.tags},t.id)}))}),Object(b.jsx)(C,{onClick:this.handleClickBtn}),r&&Object(b.jsx)(W,{onClose:this.toggleModal,imageInfo:r})]}):void 0}}]),a}(n.Component),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.handleFormSubmit=function(t){e.setState({searchValue:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchValue;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{onSubmit:this.handleFormSubmit}),Object(b.jsx)(Q,{searchValue:e}),Object(b.jsx)(h.a,{})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__jo466",form:"Searchbar_form__XuKjc",button:"Searchbar_button__MhnaU",label:"Searchbar_label__1BV3w",input:"Searchbar_input__2C4aO"}}},[[75,1,2]]]);
//# sourceMappingURL=main.f90c5804.chunk.js.map