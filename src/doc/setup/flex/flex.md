---
title : Flex
eleventyNavigation:
  key: Flex
  parent: Setup
---

<div class="content content-padding">
                    <div>
                        <h1>XY Grid </h1>
                        <p>A fully reworked new grid system in v6.4 which has all the variety inbuilt in the form of multiple grid types which includes margin grid, padding grid, frame grid, block grid and vertical grid.</p>
                        <pre>
                            <code class="html">
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-x"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"cell"</span>&gt;</span>full width cell<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"cell"</span>&gt;</span>full width cell<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-x"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"cell small-6"</span>&gt;</span>6 cells<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"cell small-6"</span>&gt;</span>6 cells<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-x"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"cell medium-6 large-4"</span>&gt;</span>12/6/4 cells<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"cell medium-6 large-8"</span>&gt;</span>12/6/8 cells<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            </code>
                        </pre>
                        <p>
                            Put it all together, and we get this:
                        </p>
                        <div class="row">
                            <div class="grid-x">
                                <div class="cell">
                                    <div class="primary callout">
                                        <p>full width cell</p>
                                      </div>
                                </div>  
                            </div>  
                        </div>
                        <div class="row">
                            <div class="grid-x">
                                <div class="cell small-6">
                                    <div class="primary callout">
                                        <p>6 cells</p>
                                    </div>
                                </div>
                                <div class="cell small-6">
                                    <div class="primary callout">
                                        <p>6 cells</p>
                                    </div>
                                </div>
                              </div>
                        </div>
                        <div class="row">
                            <div class="grid-x">
                                <div class="cell medium-6 large-4"> 
                                    <div class="primary callout">
                                        <p>12/6/4 cells</p>
                                    </div>
                                </div>
                                <div class="cell medium-6 large-8">
                                    <div class="primary callout">
                                        <p>12/6/8 cells</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>