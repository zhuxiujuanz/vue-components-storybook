import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import CustomTable from './index';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Example/CustomTable',
    component: CustomTable,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    //     size: {
    //
    //         control: { type: 'select' },
    //         options: ['small', 'medium', 'large'],
    //     },
    // },
};

const Template = (args, {argTypes})=>({
        props: Object.keys(argTypes),
        components:{ CustomTable },
    }
)

export const table = Template.bind({});

table.args = {
    primary:true,
    label:'CustomTable'
}


