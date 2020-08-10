---
title : Usage Sample
eleventyNavigation:
  key: UsageSample
  parent: Usage
---
   
<div class=" content usage">
<div class="tabs-content vertical" data-tabs-content="example-tabs">
{%- for usage in usage.tabs %}
    <div id="{{ usage.id}}" class=" tabs-panel {{usage.cssClass}}"> 
        <div class="usage-content">
            <div class="content-header">
                <i class="fa fa-{{ usage.faIcon }}"></i>
                <span> {{ usage.title }}</span>
            </div>                        
        </div>
        <div>
            <p>{{ usage.description }}</p>
        </div>
    </div>
{%- endfor %}                       
</div>
    <div class="padding-top">
        <ul class="accordion" data-accordion data-multi-expand="true" data-allow-all-closed="true">
            <li class="accordion-item" data-accordion-item>
              <a href="#" class="accordion-title"><h3>How to use tabs</h3></a>
              <div class="accordion-content" data-tab-content>
                  <h4>Tabs</h4>
                <p>Tabs are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container</p>
                <pre>
                    <code class="html">
                        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tabs"</span> <span class="hljs-attr">data-tabs</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-tabs"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tabs-title is-active"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#panel1"</span> <span class="hljs-attr">aria-selected</span>=<span class="hljs-string">"true"</span>&gt;</span>Tab 1<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tabs-title"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">data-tabs-target</span>=<span class="hljs-string">"panel2"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#panel2"</span>&gt;</span>Tab 2<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
                    </code>
                </pre>
                <p>
                    Put it all together, and we get this:
                </p>
                <ul class="tabs" data-active-collapse="true" data-tabs id="collapsing-tabs">
                    <li class="tabs-title is-active"><a href="#panel1c" aria-selected="true">Tab 1</a></li>
                    <li class="tabs-title"><a href="#panel2c">Tab 2</a></li>
                </ul>
                <div class="tabs-content" data-tabs-content="example-tabs">
                    <div class="tabs-panel is-active" id="panel1">
                      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
                    </div>
                    <div class="tabs-panel" id="panel2">
                      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                    </div>
                </div>
              </div>
            </li>
            <li class="accordion-item" data-accordion-item>
                <a href="#" class="accordion-title"><h3>How to use accordion-item</h3></a>
                <div class="accordion-content" data-tab-content>
                    <p>Basics use case of Accordion tab</p>
                    <pre>
                        <code class="html">
                            <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"accordion"</span> <span class="hljs-attr">data-accordion</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"accordion-item is-active"</span> <span class="hljs-attr">data-accordion-item</span>&gt;</span>
                                <span class="hljs-comment">&lt;!-- Accordion tab title --&gt;</span>
                                    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"accordion-title"</span>&gt;</span>Accordion 1<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                    <span class="hljs-comment">&lt;!-- Accordion tab content: it would start in the open state due to using the `is-active` state class. --&gt;</span>
                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"accordion-content"</span> <span class="hljs-attr">data-tab-content</span>&gt;</span>
                                        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Panel 1. Lorem ipsum dolor<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Nowhere to Go<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                          <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
                        </code>
                    </pre>
                    <p>Once you put it all together, here's what you get!</p>
                    <ul class="accordion" data-accordion>
                        <li class="accordion-item is-active" data-accordion-item>  
                          <a href="#" class="accordion-title">Accordion 1</a>
                          <div class="accordion-content" data-tab-content>
                            <p>Panel 1. Lorem ipsum dolor</p>
                            <a href="#">Nowhere to Go</a>
                          </div>
                        </li> 
                      </ul>
                </div>
              </li>
          </ul>
    </div>
</div>