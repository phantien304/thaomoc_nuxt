<template>
    <div>
        <h1>Hello world!</h1>
    </div>
</template>
<script>
    import axios from '~/services/request'

    export default {
        head: {
            title: 'Home page',
        },
        components: {
            'Header': () => import('~/components/share/header'),
        }
    }
</script>