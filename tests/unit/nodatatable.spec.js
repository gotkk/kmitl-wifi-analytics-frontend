import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NoDataTable from '@/components/NoDataTable.vue'

describe('NoDataTable.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'this is title'
    const contentType = 'this is type'
    const content = 'this is content'
    const wrapper = shallowMount(NoDataTable, {
        propsData: { title, contentType, content }
    })
    const expect_result = `${title} : No Data of ${contentType} ${content}`
    expect(wrapper.find("span").text()).equal(expect_result)
  })
})
