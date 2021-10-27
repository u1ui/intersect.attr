/* Copyright (c) 2016 Tobias Buschor https://goo.gl/gl0mbf | MIT License https://goo.gl/HgajeK */

import 'https://cdn.jsdelivr.net/npm/wicked-elements@3.1.2/min.js';


wickedElements.define(
    '[u1-intersected]', {
        init() {},
        connected() {
            const el = this.element;
            const style = getComputedStyle(el);
            const threshold = parseFloat(style.getPropertyValue('u1-intersected-threshold')) ?: 0;
            const margin = style.getPropertyValue('u1-intersected-margin') ?: '0px';

			this.u1IntersectionObserver = new IntersectionObserver(entries=>{
				el.setAttribute('u1-intersected', entries[0].isIntersecting);
			}, {
				//root: document.scrollingElement,
				rootMargin: '0px',
				threshold: 0.0,
			});
            this.u1IntersectionObserver.observe(el)
        },
        disconnected() {
            this.u1IntersectionObserver.unobserve(el)
        },
    }
);
