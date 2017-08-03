<template>
    <svg
        class="free-loading"
        :class="currentClass"
        viewBox="25 25 50 50">
        <circle class="loading-path" cx="50" cy="50" r="23" fill="none"/>
    </svg>
</template>

<script>
    export default {
        name: 'free-loading',
        props: {
          type: {
            type: String,
            default: 'default'
          },
          size: {
            type: String,
          },
        },
        computed: {
          currentClass() {
            const classes = {};

            if(this.type) {
              classes[`free-loading-${this.type}`]= true
            }

            if(this.size) {
              classes[`free-loading-${this.size}`]= true
            }

            return classes;
          }
        },
    };
</script>

<style lang="less" scoped>
    .free-loading {
        width: 4rem;
        animation: rotate 2s linear infinite;
    }

    .loading-path {
        stroke-dasharray: 1,100;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        stroke: #EEEEEE;
        stroke-width: 2px;
        animation: dash 1.5s ease-in-out infinite;
    }

    .free-loading-primary {
        .loading-path {
            stroke: #009688;
        }
    }

    .free-loading-secondary {
        .loading-path {
            stroke: #03a9f4;
        }
    }

    .free-loading-sm {
        width: 2rem;
    }

    .free-loading-lg {
        width: 5rem;
    }



    @keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1,150;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -35;
        }

        100% {
            stroke-dasharray: 90,150;
            stroke-dashoffset: -124;
        }
    }
</style>
