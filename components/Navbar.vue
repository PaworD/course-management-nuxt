<template>
    <div>
    <header class="header">
        <h1>Онлайн Курсы</h1>
        <ul>
            <li>
                <nuxt-link to="/">Домой</nuxt-link>
                <nuxt-link to="/courses">Все Курсы</nuxt-link>
                <nuxt-link to="/about">О Нас</nuxt-link>
            </li>
        </ul>
    </header>  
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding: .5rem;
        border-bottom: 1px solid #ccc;
    }
    .header h1 {
        font-size: 1.5rem;
        color: #666666;
    }

    .header ul {
        display: flex;
    }
    .header ul li{
        margin: 0 7px 0 7px;
    }

</style>