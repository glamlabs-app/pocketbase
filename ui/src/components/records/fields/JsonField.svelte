<script>
    // import { SchemaField } from "pocketbase";
    // import CodeMirror from "svelte-codemirror-editor"
    // import { javascript } from "@codemirror/lang-javascript";
    import { onMount } from "svelte";
    import tooltip from "@/actions/tooltip";
    import CommonHelper from "@/utils/CommonHelper";
    import Field from "@/components/base/Field.svelte";

    export let field;
    export let value = undefined;

    let editorComponent;

    let serialized = serialize(value);

    $: if (value !== serialized?.trim()) {
        serialized = serialize(value);
        value = serialized;
    }

    $: isValid = isValidJson(serialized);

    function serialize(val) {
        if (typeof val == "string" && isValidJson(val)) {
            return val; // already serlialized
        }

        return JSON.stringify(typeof val === "undefined" ? null : val, null, 2);
    }

    function isValidJson(val) {
        try {
            JSON.parse(val === "" ? null : val);
            return true;
        } catch (_) {}

        return false;
    }

    onMount(async () => {
        try {
            editorComponent = (await import("@/components/base/CodeEditor.svelte")).default;
        } catch (err) {
            console.warn(err);
        }
    });
</script>

<Field class="form-field {field.required ? 'required' : ''}" name={field.name} let:uniqueId>
    <label for={uniqueId}>
        <i class={CommonHelper.getFieldTypeIcon(field.type)} />
        <span class="txt">{field.name}</span>
        <span
            class="json-state"
            use:tooltip={{ position: "left", text: isValid ? "Valid JSON" : "Invalid JSON" }}
        >
            {#if isValid}
                <i class="ri-checkbox-circle-fill txt-success" />
            {:else}
                <i class="ri-error-warning-fill txt-danger" />
            {/if}
        </span>
    </label>
    <!-- <CodeMirror value={serialized} lang={javascript()} on:change={(e) => {
        serialized = e.detail
        value = e.detail.trim()
    }}/> -->
    {#if editorComponent}
        <svelte:component
            this={editorComponent}
            id={uniqueId}
            maxHeight="500"
            language="json"
            value={serialized}
            on:change={(e) => {
                serialized = e.detail;
                value = serialized.trim();
            }}
        />
    {:else}
        <input type="text" class="txt-mono" value="Loading..." disabled />
    {/if}
</Field>

<style>
    .json-state {
        position: absolute;
        right: 10px;
    }
</style>
