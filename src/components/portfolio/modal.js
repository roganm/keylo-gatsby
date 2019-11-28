import React from "react"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import scrollTo from "../../utils/scroll"

const Modal = ({ name, id, description, open, close, realtorsWord }) => (
  <div
    className="portfolio-modal modal"
    id={`portfolioModal${id}`}
    tabIndex="-1"
    role="dialog"
    aria-hidden="true"
    style={{display: open ? 'block' : 'none'}}
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modal-body text-left">
                <div className="modal-heading text-uppercase">{name}</div>
                <div className="line" />
                <div children={documentToReactComponents(description)} />

                  <button
                    className="button btn btn-outline-success"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => {close(); scrollTo(250)}}
                  >
                    Find {realtorsWord}
                  </button>

                <div>
                  <button
                    className="btn btn-success"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => {close()}}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Modal
