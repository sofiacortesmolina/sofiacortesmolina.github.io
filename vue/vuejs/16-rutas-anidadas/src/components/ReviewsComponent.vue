<template>
  <div>
    <br>
    <h2>Reviews</h2>
    <ul class="reviews">
      <li v-for="(review,id) in reviews" :key="id">
        <img :src="review.avatar" alt="">
        <div>{{ review.texto }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ReviewsComponent',
  data: function(){
    return {
      reviews: [
        {
          avatar: "https://randomuser.me/api/portraits/men/97.jpg",
          texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },
        {
          avatar: "https://randomuser.me/api/portraits/women/97.jpg",
          texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/10.jpg",
          texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },
        {
          avatar: "https://randomuser.me/api/portraits/women/8.jpg",
          texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/7.jpg",
          texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        },        

      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.reviews
  list-style: none
  margin: 30px 0 0 0
  padding: 0
  display: flex
  flex-direction: column
  li
    padding: 0
    margin-bottom: 2%
    display: flex
    align-items: center
    img
      width: 60px
    div
      text-align: left
      margin-left: 12px
</style>