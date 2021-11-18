/* Copyright (c) 2016 Tobias Buschor https://goo.gl/gl0mbf | MIT License https://goo.gl/HgajeK */

import 'https://cdn.jsdelivr.net/npm/wicked-elements@3.1.2/min.js';


wickedElements.define(
    '[u1-intersect]', {
        init() {},
        connected() {
            const el = this.element;
            const style = getComputedStyle(el);
            const threshold = parseFloat(style.getPropertyValue('--u1-intersect-threshold').trim()) || 0;
            const margin = style.getPropertyValue('--u1-intersect-margin') || '0px';

            const thresholds = new Set([threshold, 0, 1, 0.5]);

            this.u1IntersectionObserver = new IntersectionObserver(entries=>{
                let attrValue = '';
                let ratio = entries[0].intersectionRatio;
                let onTarget = false;
                if (entries[0].isIntersecting) {
                    for (const val of thresholds) {
                        if (ratio >= val) attrValue += ' '+val;
                    }
                    if (ratio >= threshold) onTarget = true;
                }
                attrValue = attrValue.trim();
				el.setAttribute('u1-intersect', attrValue);
                el.classList[onTarget?'add':'remove']('u1-intersected');

                //var event = new CustomEvent('u1-intersected-'+(onTarget?'in':'out'), /*{bubbles:true}*/ );
                //el.dispatchEvent(event);
			}, {
				//root: document.scrollingElement,
				rootMargin: margin,
				threshold: thresholds,
			});
            this.u1IntersectionObserver.observe(el);
        },
        disconnected() {
            this.u1IntersectionObserver.unobserve(el);
        },
    }
);
