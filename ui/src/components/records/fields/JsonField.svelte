<script>
    import { SchemaField } from "pocketbase";
    import CommonHelper from "@/utils/CommonHelper";
    import Field from "@/components/base/Field.svelte";
    import { JSONEditor } from "svelte-jsoneditor";

    export let field = new SchemaField();
    export let value = undefined;

    let content = {
        text: undefined,
        json: value
    }
</script>

<Field class="form-field {field.required ? 'required' : ''} json" name={field.name} let:uniqueId>
    <label for={uniqueId}>
        <i class={CommonHelper.getFieldTypeIcon(field.type)} />
        <span class="txt">{field.name}</span>
    </label>

    <div class="editor">
        <JSONEditor
            bind:content
            mode="text"
            mainMenuBar={false}
            navigationBar={false}
            onChange={(updatedContent) => {
                content = updatedContent
                value = content.text
            }}
        />
    </div>

</Field>

<style>
    .editor {
        resize: vertical;
        height: 500px;
    }
</style>
