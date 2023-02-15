import WhoToFollowListItem from './WhoToFollowListItem.js';
import whos from './who.js'

const WhoToFollowList = () => {
  return (`
    <ul class="list-group">
      <li class="list-group-item">
      <div class="wd-bold-text">Who to follow</div>
      </li>
      ${whos.map(who => { return WhoToFollowListItem(who) }).join('')}
    </ul>
  `)
}

export default WhoToFollowList;