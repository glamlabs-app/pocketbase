<script>
    import CommonHelper from "@/utils/CommonHelper";
    import Dragline from "@/components/base/Dragline.svelte";

    const widthStorageKey = "@adminSidebarWidth";

    let classes = "";
    export { classes as class }; // export reserved keyword

    let sidebarElem;
    let initialSidebarWidth;
    let sidebarWidth = localStorage.getItem(widthStorageKey) || null;

    $: if (sidebarWidth && sidebarElem) {
        sidebarElem.style.width = sidebarWidth;
        localStorage.setItem(widthStorageKey, sidebarWidth);
    }
</script>

<aside bind:this={sidebarElem} class="page-sidebar {classes}" style="max-width: 1000px !important;">
    <slot />
</aside>

<Dragline
    on:dragstart={() => {
        initialSidebarWidth = sidebarElem.offsetWidth;
    }}
    on:dragging={(e) => {
        sidebarWidth = initialSidebarWidth + e.detail.diffX + "px";
    }}
    on:dragstop={() => {
        CommonHelper.triggerResize();
    }}
/>
