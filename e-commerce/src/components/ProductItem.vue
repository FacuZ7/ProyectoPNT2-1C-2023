<template>
    <div class="item">
        <div class="productImage">
            <slot name="image"></slot> <!-- imagen del producto (implementar al final) -->
        </div>
            
        <div class="details">
            <h3>
                <slot name="heading"></slot>
            </h3>
            <slot></slot>

            <h2>
                <slot name="price"></slot>
            </h2> 
        </div>
    </div>
  </template>

<style>
    .item{
        border-radius: 10px; background-color: gray; padding: 20px;
    }
</style>