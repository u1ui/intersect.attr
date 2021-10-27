/* Copyright (c) 2016 Tobias Buschor https://goo.gl/gl0mbf | MIT License https://goo.gl/HgajeK */

import 'https://cdn.jsdelivr.net/npm/wicked-elements@3.1.2/min.js';


wickedElements.define(
    '[u1-intersected]', {
        init() {
            console.log(1)
        },
        connected() {
            console.log(2)
            const el = this.element;

			this.u1IntersectionObserver = new IntersectionObserver(entries=>{
				el.setAttribute('u1-intersected', entries[0].isIntersecting)
			}, {
				//root: document.scrollingElement,
				rootMargin: '0px',
				threshold: 1.0
			});
            this.u1IntersectionObserver.observe(el)
        },
        disconnected() {
            //remove(this.element)
        },
    }
);
