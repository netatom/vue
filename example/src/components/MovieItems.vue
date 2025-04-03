<script>
export default {
    props: {
        movie: Object
    }
}
</script>
<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="movie.image" alt="" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ movie.title }}</h5>
                    <p clasee="card-text">
                        <small class="text-muted">
                            {{ movie.year }}
                        </small>
                    </p>
                    <p class="card-text">{{ movie.summary }}</p>
                </div>
            </div>
        </div>
    </div>
</template>