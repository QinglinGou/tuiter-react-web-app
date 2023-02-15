import PostSummaryListItem from './PostSummaryListItem.js';
import posts from './posts.js';

const PostSummaryList = () => {
  return (`
    <ul class="list-group wd-post-summary">
    ${ posts.map(post => {
    return PostSummaryListItem(post);
  }).join('')}
    </ul>
  `)
}

export default PostSummaryList;