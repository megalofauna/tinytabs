# TinyTabs

No-frills tabs in ~560 bytes (minified and gzipped).

Credit goes to [EJ Mason](http://www.ejmason.com/tabbed-interfaces/) for accessibility features (still a work in progress for TinyTabs).

## Markup Requirements

Markup requirements are fairly minimal. Out of the box, you must:

1.  Use a valid CSS selector to identify the tab set. In the example below, I've used `.tinytabs`, but you can pass in whatever valid CSS selector you'd like to the TinyTabs constructor function
2.  Include the `data-tab-trigger` attribute on the anchor tags in the tab trigger list
3.  Include the `data-tab-content` attribute on your tab content sections
4.  Include the `hidden` attribute on your tab content sections
5.  Include an `id` selector in the `href` attribute that points to a corresponding tab. Feel free (in fact, feel strongly encouraged) to use more descriptive `id`'s than I've used in the barebones example below.

## Markup Example

In reality, you'll most likely want to add additional classes to your markup for styling purposes, but this is all you need to get TinyTabs up and running.

```html
   <div class="tinytabs">
    <ul>
      <li>
        <a data-tab-trigger class="is-active" href="#tab1">
          Tab Trigger 1
        </a>
      </li>
      <li>
        <a data-tab-trigger href="#tab2">
          Tab Trigger 2
        </a>
      </li>
      <li>
        <a data-tab-trigger href="#tab3">
          Tab Trigger 3
        </a>
      </li>
    </ul>

    <div>
      <section data-tab-content hidden id="tab1">
        <h2>Tab Title 1</h2>
        <p>Tab Content 1</p>
      </section>

      <section data-tab-content hidden id="tab2">
        <h2>Tab Title 2</h2>
        <p>Tab Content 2</p>
      </section>

      <section data-tab-content hidden id="tab3">
        <h2>Tab Title 3</h2>
        <p>Tab Content 3</p>
      </section>
    </div>
  </div>
```

## Making a New Tab Set

To instantiate a new TinyTabs tab set, call the TinyTabs constructor and pass in your tab set selector .

```js
const myTabSet = new TinyTabs(".tinytabs");
```

That's it. But that's not all!

## Options

You can pass in an optional options object to the constructor in order to use your own custom CSS selectors in preference to the defaults.

| Options               | Notes                                                         |
| --------------------- | ------------------------------------------------------------- |
| tabTrigger            | takes a valid CSS selector                                    |
| tabContent            | takes a valid CSS selector                                    |
| tabTriggerActiveClass | takes a valid CSS selector reference (no `.`).                |
| equalizeTabHeight     | takes Boolean value of `true` or `false` (default is `false`) |

## Options Example

```js
const myOptions = {
  tabTrigger: ".my-trigger-class",
  tabContent: ".my-content-class",
  tabTriggerActiveClass: "my-active-class"
};
const myTabSet = new TinyTabs(".tinytabs", myOptions);
```

## TODO

- [ ] Add themes
- [ ] Add accessibility features
- [ ] Add demo page
- [ ] Add IE11 support via polyfill
