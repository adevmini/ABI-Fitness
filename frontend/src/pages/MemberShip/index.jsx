import React from "react";
import "./MemberShip.scss";
import MainLayout from "../../layouts/MainLayout";
import Input from "../../components/Input";

export default function MemberShip() {
  return (
    <MainLayout>
      <div className="container">
        <h1>My Membership</h1>
        <div className="membership">
          <div className="card">
            <div className="card-body">
              <section>
                <span>Membership Type :</span>
                <div className="memership__input">
                  <Input />
                </div>
              </section>
              <section>
                <span>Time Phase :</span>
                <div className="memership__input">
                  <Input />
                </div>
              </section>
              <section>
                <span>Instructor :</span>
                <div className="memership__input">
                  <Input />
                </div>
              </section>
            </div>
            <h4>
              Next payment due in 6 months and 23 days.{" "}
              <button>Update Membership</button>
            </h4>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
