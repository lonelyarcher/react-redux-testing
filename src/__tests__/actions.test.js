import * as actions from '../index'

describe('actions', () => {
  const subreddit = 'reactjs'

  describe('selectSubreddit', () => {
    it('should create an action with a given subreddit', () => {
      const expectedAction = {
        type: actions.SELECT_SUBREDDIT,
        subreddit
      }
      expect(actions.selectSubreddit(subreddit)).toEqual(expectedAction)
    })
  })
})