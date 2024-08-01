import React from 'react'
import {Controller} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'

function Rte({name,control,label,defaultValue=''}) {
  return (
    <div className='w-full'>{
        label && (<label 
        className='mb-1 pl-1 inline-block'
        htmlFor="">{label}</label>)}
        <Controller
        name={ name || "controler"}
        control={control}
        render={({field:{onChange}})=>(
          <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
          height: 500,
          menubar: false,
          plugins: [
             'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
             'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
             'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
          ],
          toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
             'alignleft aligncenter alignright alignjustify | ' +
             'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
          onEditorChange={onChange}
      />
        )}


        />
    </div>
  )
}

export default Rte