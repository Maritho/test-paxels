import { mount } from '@vue/test-utils'
import Homepage from '@/pages/index.vue'

describe('pages/index.vue', () => {
  test('is a Homepage', () => {
    const wrapper = bro(Homepage)
    expect(wrapper.vm).toContain("Cari gambar...")
  })
})
