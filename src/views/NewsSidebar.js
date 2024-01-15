// ** React Imports
import { useState, Fragment } from "react";

// ** Third Party Components
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import { Editor } from "react-draft-wysiwyg";
import { X, Star, Trash } from "react-feather";
import Select, { components } from "react-select"; //eslint-disable-line
import { useForm, Controller } from "react-hook-form";
import { EditorState, ContentState } from "draft-js";

// ** Reactstrap Imports
import {
  Modal,
  ModalBody,
  Button,
  Form,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";

// ** Utils
import { isObjEmpty, selectThemeColors } from "@utils";

// ** Styles Imports
import "@styles/react/libs/editor/editor.scss";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/react-select/_react-select.scss";

// ** Function to capitalize the first letter of string
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// ** Modal Header
const ModalHeader = (props) => {
  // ** Props
  const {
    children,
    store,
    handleTaskSidebar,
    setDeleted,
    deleted,
    important,
    setImportant,
    deleteTask,
    dispatch,
  } = props;

  // ** Function to delete task
  const handleDeleteTask = () => {
    setDeleted(!deleted);
    dispatch(deleteTask(store.selectedTask.id));
    handleTaskSidebar();
  };

  return (
    <div className="modal-header d-flex align-items-center justify-content-between mb-1">
      <h5 className="modal-title">{children}</h5>
      <div className="todo-item-action d-flex align-items-center">
        {store && !isObjEmpty(store.selectedTask) ? (
          <Trash
            className="cursor-pointer mt-25"
            size={16}
            onClick={() => handleDeleteTask()}
          />
        ) : null}
        <span className="todo-item-favorite cursor-pointer mx-75">
          <Star
            size={16}
            onClick={() => setImportant(!important)}
            className={classnames({
              "text-warning": important === true,
            })}
          />
        </span>
        <X className="fw-normal mt-25" size={16} onClick={handleTaskSidebar} />
      </div>
    </div>
  );
};

const TaskSidebar = (props) => {
  // ** Props
  const {
    open,
    handleTaskSidebar,
    store,
    dispatch,
    updateTask,
    selectTask,
    addTask,
    deleteTask,
  } = props;

  // ** States
  const [tags, setTags] = useState([]);
  const [desc, setDesc] = useState(EditorState.createEmpty());
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());

  const {
    control,
    setError,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "" },
  });

  return (
    <Modal
      isOpen={open}
      toggle={handleTaskSidebar}
      className="sidebar-lg"
      contentClassName="p-0"
      modalClassName="modal-slide-in sidebar-todo-modal"
    >
      <Form id="form-modal-todo" className="todo-modal">
        <ModalHeader
          store={store}
          deleted={deleted}
          dispatch={dispatch}
          important={important}
          deleteTask={deleteTask}
          setDeleted={setDeleted}
          setImportant={setImportant}
          handleTaskSidebar={handleTaskSidebar}
        >
          공지 상세 보기
        </ModalHeader>
        <ModalBody className="flex-grow-1 pb-sm-0 pb-3">
          <div className="mb-1">
            <Label className="form-label" for="task-title">
              제목 <span className="text-danger">*</span>
            </Label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  id="task-title"
                  placeholder="Title"
                  className="new-todo-item-title"
                  invalid={errors.title && true}
                  {...field}
                />
              )}
            />
            {errors.title && <FormFeedback>제목을 입력해주세요</FormFeedback>}
          </div>
          <div className="mb-1">
            <Label className="form-label" for="task-writer">
              작성자 <span className="text-danger">*</span>
            </Label>
            <Controller
              name="writer"
              control={control}
              render={({ field }) => (
                <Input
                  id="task-writer"
                  placeholder="writer"
                  className="new-todo-item-writer"
                  invalid={errors.writer && true}
                  {...field}
                />
              )}
            />
            {errors.writer && (
              <FormFeedback>작성자를 입력해주세요</FormFeedback>
            )}
          </div>
          <div className="mb-1">
            <Label className="form-label" for="due-date">
              작성일
            </Label>
            <Flatpickr
              id="due-date"
              name="due-date"
              className="form-control"
              value="2020-12-14"
              options={{ dateFormat: "Y-m-d" }}
            />
          </div>
          <div className="mb-1">
            <Label for="task-desc" className="form-label">
              내용
            </Label>
            <Editor
              editorState={desc}
              wrapperClassName="toolbar-bottom"
              toolbar={{
                options: ["inline", "textAlign"],
                inline: {
                  inDropdown: false,
                  options: ["bold", "italic", "underline"],
                },
              }}
            />
          </div>
          <div>
            <Button
              color="primary"
              className="update-btn update-todo-item me-1"
            >
              업데이트
            </Button>
            <Button color="secondary" onClick={handleTaskSidebar} outline>
              취소
            </Button>
          </div>
        </ModalBody>
      </Form>
    </Modal>
  );
};

export default TaskSidebar;
